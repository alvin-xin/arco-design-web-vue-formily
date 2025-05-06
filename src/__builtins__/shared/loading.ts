import { Message, MessageReturn } from "@arco-design/web-vue"

export const loading = async (loadingText = 'Loading...', processor: () => Promise<any>) => {
  let loadingInstance: MessageReturn | null = null;
  const loading = setTimeout(() => {
    loadingInstance = Message.loading(loadingText)
  }, 100)
  try {
    return await processor()
  } finally {
    if(loadingInstance) {
      (loadingInstance as MessageReturn)?.close?.();
    }
    clearTimeout(loading)
  }
}
