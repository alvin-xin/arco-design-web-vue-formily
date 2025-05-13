const schema = {
  type: 'object',
  properties: {
    // color_picker: {
    //   type: 'string',
    //   title: 'input box',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'ColorPicker',
    //   required: true,
    //   'x-component-props': {
    //     style: { width: 240 },
    //     'show-text': true,
    //     'show-preset': true,
    //     'format': 'hex',
    //   },
    // },
    // date_picker__date: {
    //   type: 'string',
    //   title: 'Normal date',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'DatePicker',
    //   'x-component-props': {
    //     'show-time': true,
    //     'format': 'YYYY-MM-DD HH:mm:ss',
    //   }
    // },
    // date_picker__month: {
    //   type: 'string',
    //   title: 'Normal month',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'MonthPicker',
    //   'x-component-props': {}
    // },
    // date_picker__year: {
    //   type: 'string',
    //   title: 'Normal year',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'YearPicker',
    //   'x-component-props': {}
    // },
    // date_picker__quarter: {
    //   type: 'string',
    //   title: 'Normal quarter',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'QuarterPicker',
    //   'x-component-props': {}
    // },
    // date_picker__week: {
    //   type: 'string',
    //   title: 'Normal week',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'WeekPicker',
    //   'x-component-props': {}
    // },
    // date_picker__range: {
    //   type: 'string',
    //   title: 'Normal range',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'RangePicker',
    //   'x-component-props': {
    //     mode: 'quarter'
    //   }
    // },



    array: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      'x-component-props': {
        pagination: {
          'show-total': true,
          'show-jumper': true,
          'show-page-size': true,
        },
        scroll: { x: 800 },
        // draggable: { type: 'handle', width: 30 },
        bordered: { cell: true, wrapper: true }
      },
      items: {
        type: 'object',
        properties: {
          // column1: {
          //   type: 'void',
          //   'x-component': 'ArrayTable.Column',
          //   'x-component-props': { width: 80, title: 'Index', align: 'center' },
          //   properties: {
          //     index: {
          //       type: 'void',
          //       'x-component': 'ArrayTable.Index',
          //     },
          //   },
          // },
          column2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 200, title: 'A1' },
            properties: {
              a1: {
                type: 'string',
                'x-decorator': 'Editable',
                'x-component': 'Input',
                required: true,
              },
            },
          },
          column3: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 200, title: 'A2' },
            properties: {
              a2: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                required: true,
              },
            },
          },
          column4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { title: 'A3' },
            properties: {
              a3: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
            },
          },
          column5: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Operations',
              prop: 'operations',
              width: 200,
              fixed: 'right',
            },
            properties: {
              item: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                  moveDown: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveDown',
                  },
                  moveUp: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveUp',
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'ArrayTable.Addition',
          title: '添加条目',
        },
      },
    },

    // address: {
    //   type: 'string',
    //   title: '地址选择',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Cascader',
    //   'x-component-props': {
    //     style: {
    //       width: 240,
    //     },
    //   },
    //   'x-reactions': [
    //     '{{useAsyncDataSource("//unpkg.com/china-location/dist/location.json",transformAddress)}}',
    //   ],
    // },


    // array_items__string_array: {
    //   type: 'array',
    //   'x-component': 'ArrayItems',
    //   'x-decorator': 'FormItem',
    //   title: '字符串数组',
    //   items: {
    //     type: 'void',
    //     'x-component': 'Space',
    //     properties: {
    //       sort: {
    //         type: 'void',
    //         'x-decorator': 'FormItem',
    //         'x-component': 'ArrayItems.SortHandle',
    //       },
    //       input: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         'x-component': 'Input',
    //       },
    //       remove: {
    //         type: 'void',
    //         'x-decorator': 'FormItem',
    //         'x-component': 'ArrayItems.Remove',
    //       },
    //     },
    //   },
    //   properties: {
    //     add: {
    //       type: 'void',
    //       title: 'Add entry',
    //       'x-component': 'ArrayItems.Addition',
    //     },
    //   },
    // },










    // array_cards__string_array: {
    //   type: 'array',
    //   'x-component': 'ArrayCards',
    //   maxItems: 3,
    //   'x-decorator': 'FormItem',
    //   'x-component-props': {
    //     title: 'String array',
    //   },
    //   items: {
    //     type: 'void',
    //     properties: {
    //       index: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.Index',
    //       },
    //       input: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         title: 'Input',
    //         required: true,
    //         'x-component': 'Input',
    //       },
    //       remove: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.Remove',
    //       },
    //       moveUp: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.MoveUp',
    //       },
    //       moveDown: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.MoveDown',
    //       },
    //     },
    //   },
    //   properties: {
    //     addition: {
    //       type: 'void',
    //       title: 'Add entry',
    //       'x-component': 'ArrayCards.Addition',
    //     },
    //   },
    // },
    // array_cards__object_array: {
    //   type: 'array',
    //   'x-component': 'ArrayCards',
    //   maxItems: 3,
    //   'x-decorator': 'FormItem',
    //   'x-component-props': {
    //     title: 'Object array',
    //   },
    //   items: {
    //     type: 'object',
    //     properties: {
    //       index: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.Index',
    //       },
    //       input: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         title: 'Input',
    //         required: true,
    //         'x-component': 'Input',
    //       },
    //       input2: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         title: 'Input2',
    //         required: true,
    //         'x-component': 'Input',
    //       },
    //       remove: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.Remove',
    //       },
    //       moveUp: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.MoveUp',
    //       },
    //       moveDown: {
    //         type: 'void',
    //         'x-component': 'ArrayCards.MoveDown',
    //       },
    //     },
    //   },
    //   properties: {
    //     addition: {
    //       type: 'void',
    //       title: 'Add entry',
    //       'x-component': 'ArrayCards.Addition',
    //     },
    //   },
    // },






    // array_collapse__string_array: {
    //   type: 'array',
    //   'x-component': 'ArrayCollapse',
    //   maxItems: 3,
    //   'x-decorator': 'FormItem',
    //   items: {
    //     type: 'void',
    //     'x-component': 'ArrayCollapse.CollapsePanel',
    //     'x-component-props': {
    //       header: 'String array',
    //     },
    //     properties: {
    //       index: {
    //         type: 'void',
    //         'x-component': 'ArrayCollapse.Index',
    //       },
    //       input: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         title: 'Input',
    //         required: true,
    //         'x-component': 'Input',
    //       },
    //       remove: {
    //         type: 'void',
    //         'x-component': 'ArrayCollapse.Remove',
    //       },
    //       moveUp: {
    //         type: 'void',
    //         'x-component': 'ArrayCollapse.MoveUp',
    //       },
    //       moveDown: {
    //         type: 'void',
    //         'x-component': 'ArrayCollapse.MoveDown',
    //       },
    //     },
    //   },
    //   properties: {
    //     addition: {
    //       type: 'void',
    //       title: 'Add entry 111',
    //       'x-component': 'ArrayCollapse.Addition',
    //     },
    //   },
    // },


    // array_tabs__object_array: {
    //   type: 'array',
    //   title: 'Array Tabs Object array',
    //   'x-decorator': 'FormItem',
    //   maxItems: 3,
    //   'x-component': 'ArrayTabs',
    //   items: {
    //     type: 'object',
    //     properties: {
    //       aaa: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         title: 'AAA',
    //         required: true,
    //         'x-component': 'Input',
    //       },
    //       bbb: {
    //         type: 'string',
    //         'x-decorator': 'FormItem',
    //         title: 'BBB',
    //         required: true,
    //         'x-component': 'Input',
    //       },
    //     },
    //   },
    // },




    // checkbox__single: {
    //   type: 'boolean',
    //   title: 'Are you sure',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Checkbox',
    //   'x-component-props': {
    //     onInput(e) {
    //       console.log(`checked = ${e.target.checked}`)
    //     },
    //   },
    // },
    // checkbox__multiple: {
    //   type: 'array',
    //   title: 'Check',
    //   enum: [
    //     {
    //       label: 'Option 1',
    //       value: 1,
    //     },
    //     {
    //       label: 'Option 2',
    //       value: 2,
    //     },
    //   ],
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Checkbox.Group',
    // },


    // form_collapse: {
    //   type: 'void',
    //   title: 'Folding Panel',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'FormCollapse',
    //   'x-component-props': {
    //     formCollapse: '{{formCollapse}}',
    //   },
    //   properties: {
    //     panel1: {
    //       type: 'void',
    //       'x-component': 'FormCollapse.CollapsePanel',
    //       'x-component-props': {
    //         header: 'A1',
    //       },
    //       properties: {
    //         form_collapse__aaa: {
    //           type: 'string',
    //           title: 'AAA',
    //           'x-decorator': 'FormItem',
    //           required: true,
    //           'x-component': 'Input',
    //         },
    //       },
    //     },
    //     panel2: {
    //       type: 'void',
    //       'x-component': 'FormCollapse.CollapsePanel',
    //       'x-component-props': {
    //         header: 'A2',
    //       },
    //       properties: {
    //         form_collapse__bbb: {
    //           type: 'string',
    //           title: 'BBB',
    //           'x-decorator': 'FormItem',
    //           required: true,
    //           'x-component': 'Input',
    //         },
    //       },
    //     },
    //     panel3: {
    //       type: 'void',
    //       'x-component': 'FormCollapse.CollapsePanel',
    //       'x-component-props': {
    //         header: 'A3',
    //       },
    //       properties: {
    //         form_collapse__ccc: {
    //           type: 'string',
    //           title: 'CCC',
    //           'x-decorator': 'FormItem',
    //           required: true,
    //           'x-component': 'Input',
    //         },
    //       },
    //     },
    //   },
    // },


    // form_step: {
    //   type: 'void',
    //   'x-component': 'FormStep',
    //   'x-component-props': {
    //     formStep: '{{formStep}}',
    //   },
    //   properties: {
    //     step1: {
    //       type: 'void',
    //       'x-component': 'FormStep.StepPane',
    //       'x-component-props': {
    //         title: 'First Step',
    //       },
    //       properties: {
    //         form_step__aaa: {
    //           type: 'string',
    //           title: 'step 1',
    //           required: true,
    //           'x-decorator': 'FormItem',
    //           'x-component': 'Input',
    //         },
    //       },
    //     },
    //     step2: {
    //       type: 'void',
    //       'x-component': 'FormStep.StepPane',
    //       'x-component-props': {
    //         title: 'Second Step',
    //       },
    //       properties: {
    //         form_step__bbb: {
    //           type: 'string',
    //           title: 'step 2',
    //           required: true,
    //           'x-decorator': 'FormItem',
    //           'x-component': 'Input',
    //         },
    //       },
    //     },
    //     step3: {
    //       type: 'void',
    //       'x-component': 'FormStep.StepPane',
    //       'x-component-props': {
    //         title: 'The third step',
    //       },
    //       properties: {
    //         form_step__ccc: {
    //           type: 'string',
    //           title: 'step 3',
    //           required: true,
    //           'x-decorator': 'FormItem',
    //           'x-component': 'Input',
    //         },
    //       },
    //     },
    //   },
    // },

    // inputNumber: {
    //   type: 'number',
    //   title: '输入框',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'InputNumber',
    //   'x-component-props': {
    //     style: {
    //       width: '240px',
    //     },
    //   },
    // },
    // password: {
    //   type: 'string',
    //   title: '密码框',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Password',
    // },


    // radio: {
    //   type: 'boolean',
    //   title: '单选',
    //   enum: [
    //     {
    //       label: '选项1',
    //       value: 1,
    //     },
    //     {
    //       label: '选项2',
    //       value: 2,
    //     },
    //   ],
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Radio.Group',
    //   'x-component-props': {
    //     optionType: 'button',
    //   },
    // },

    // select: {
    //   type: 'string',
    //   title: '选择框',
    //   enum: [
    //     {
    //       label: '选项1',
    //       value: 1,
    //     },
    //     {
    //       label: '选项2',
    //       value: 2,
    //     },
    //   ],
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Select',
    //   'x-component-props': {
    //     style: 'width: 240px;',
    //   },
    // },


    // tree_select: {
    //   type: 'string',
    //   title: '选择框',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'TreeSelect',
    //   enum: [
    //     {
    //       title: '选项1',
    //       value: 1,
    //       key: 1,
    //       children: [
    //         {
    //           title: 'Child Node1',
    //           value: '0-0-0',
    //           key: '0-0-0',
    //         },
    //         {
    //           title: 'Child Node2',
    //           value: '0-0-1',
    //           key: '0-0-1',
    //         },
    //         {
    //           title: 'Child Node3',
    //           value: '0-0-2',
    //           key: '0-0-2',
    //         },
    //       ],
    //     },
    //     {
    //       title: '选项2',
    //       value: 2,
    //       key: 2,
    //       children: [
    //         {
    //           title: 'Child Node1',
    //           value: '0-1-0',
    //           key: '0-1-0',
    //         },
    //         {
    //           title: 'Child Node2',
    //           value: '0-1-1',
    //           key: '0-1-1',
    //         },
    //         {
    //           title: 'Child Node3',
    //           value: '0-1-2',
    //           key: '0-1-2',
    //         },
    //       ],
    //     },
    //   ],
    //   'x-component-props': {
    //     style: {
    //       width: '200px',
    //     },
    //   },
    // },


    // upload_base: {
    //   type: 'array',
    //   title: '上传',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'NormalUpload',
    //   required: true,
    // },


    transfer: {
      type: 'array',
      title: '穿梭框',
      enum: [
        { label: '选项1', value: '1', key: '1' },
        { label: '选项2', value: '2', key: '2' },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Transfer',
      'x-component-props': {
        render: (item) => item.title,
      },
    },

    form_grid: {
      type: 'void',
      'x-component': 'FormGrid',
      'x-component-props': {
        minColumns: [4, 6, 10],
      },
      properties: {
        aaa: {
          type: 'string',
          title: 'AAA',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        bbb: {
          type: 'string',
          title: 'BBB',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ccc: {
          type: 'string',
          title: 'CCC',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ddd: {
          type: 'string',
          title: 'DDD',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        eee: {
          type: 'string',
          title: 'EEE',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        fff: {
          type: 'string',
          title: 'FFF',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ggg: {
          type: 'string',
          title: 'GGG',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
  },

}

export default schema