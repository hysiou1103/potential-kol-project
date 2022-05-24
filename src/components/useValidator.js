export default function useValidator() {
  const validations = {
    name: {
      required: {
        value: true,
        message: '此欄位為必填'
      },
      pattern: {
        RegExp: /^[a-zA-z\u4e00-\u9ffa5,.'-]{2,}$/i,
        message: '請輸入正確姓名',
        clearInvalidInput: ''
      }
    },
    email: {
      required: {
        value: true,
        message: '此欄位為必填'
      },
      pattern: {
        RegExp:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: '請輸入正確信箱',
        clearInvalidInput: ''
      },
      encryption: {
        value: true,
        excryFn: inputValue => {
          const accountArr = inputValue.split('@')[0].split('')
          const suffix = inputValue.split('@')[1]
          accountArr.forEach((item, index, arr) => {
            index % 2 === 1 ? (arr[index] = '*') : (arr[index] = item)
          })
          const encrypVal = `${accountArr.join('')}@${suffix}`
          return encrypVal
        }
      }
    },
    phone: {
      required: {
        value: true,
        message: '此欄位為必填'
      },
      pattern: {
        RegExp: /(\w{2,3}-?|\(\w{2,3}\))\w{3,4}-?\w{4}|09\w{2}(\w{6}|-\w{3}-\w{3})/,
        message: '請輸入正確電話號碼',
        clearInvalidInput: ''
      }
    },
    competitionID: {
      required: {
        value: true,
        message: '此欄位為必填'
      },
      pattern: {
        RegExp: /^[A-Za-z\u4e00-\u9fa5]{1,20}$/,
        message: '不可輸入特殊符號',
        clearInvalidInput: ''
      }
    },
    selfIntro: {
      required: {
        value: true,
        message: '此欄位為必填'
      }
    },
    detailAddress: {
      required: {
        value: true,
        message: '此欄位為必填'
      }
    }
  }
  return { validations }
}
