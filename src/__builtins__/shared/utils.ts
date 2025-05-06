export function isValidElement(element: any) {
  return (
    isVueOptions(element) ||
    (element &&
      typeof element === 'object' &&
      'componentOptions' in element &&
      'context' in element &&
      element.tag !== undefined)
  ) // remove text node
}

export function isVnode(element: any): boolean {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  )
}

export function isVueOptions(options: any) {
  return (
    options &&
    (typeof options.template === 'string' ||
      typeof options.render === 'function')
  )
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function composeExport<T0 extends {}, T1 extends {}>(
  s0: T0,
  s1: T1
): T0 & T1 {
  return Object.assign(s0, s1)
}

export function isEmptyElement(c: any) {
  return !(c.tag || (c.text && c.text.trim() !== ''))
}

export function filterEmpty(children = []) {
  return children.filter((c) => !isEmptyElement(c))
}




// 用于生成递增计数的闭包
const getCounter = (() => {
  let counter = 0;
  let lastTimestamp = 0;
  return () => {
    const now = Date.now();
    if (now !== lastTimestamp) {
      counter = 0;
      lastTimestamp = now;
    }
    return counter++;
  };
})();

export function uuid(): string {
  // 生成基于时间戳的随机字符串部分
  const timestamp = Date.now().toString(36);
  
  // 生成随机数部分
  const randomPart = Math.random()
    .toString(36)
    .substring(2, 8);
  
  // 获取当前计数器值并转换为36进制
  const count = getCounter().toString(36).padStart(6, '0');
  
  // 组合时间戳、随机数和计数器，确保唯一性
  return `${timestamp}-${randomPart}-${count}`;
}