import { notification } from "ant-design-vue"

notification.config({
  placement: "topRight",
  top: "50px",
  duration: 3
})

function AntNotice(type, Tit, Cont) {
  notification[type]({
    message: Tit,
    description: Cont
  })
}

export default {
  AntNotice
}
