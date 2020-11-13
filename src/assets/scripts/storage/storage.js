import { storagePrefix } from "@/assets/scripts/config/config"
import { uri } from "@/assets/scripts/tools"

class Storage {
  constructor(type) {
    if (type === "local") {
      this.store = window.localStorage
    } else if (type === "session") {
      this.store = window.sessionStorage
    }
    this.prefix = storagePrefix
  }

  set(key, value) {
    value = JSON.stringify(value)

    this.store.setItem(uri.encode(this.prefix + key), uri.encode(value))

    return this
  }

  get(key) {
    if (!key) {
      throw new Error("没有找到key。")
    }
    if (typeof key === "object") {
      throw new Error("key不能是一个对象。")
    }
    let value = this.store.getItem(uri.encode(this.prefix + key))

    if (value === null) {
      return {}
    }

    try {
      value = JSON.parse(uri.decode(value))
    } catch (e) {
      value = {}
    }
    return value
  }

  remove(key) {
    this.store.removeItem(uri.encode(this.prefix + key))
    return this
  }
}

export const localStorage = new Storage("local")
export const sessionStorage = new Storage("session")
