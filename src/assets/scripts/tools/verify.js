export default new (class Verify {
  // 验证手机号码是否正确， true/false
  isTel(tel) {
    return /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(
      tel
    )
  }
})()
