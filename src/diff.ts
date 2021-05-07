import { VNode } from './dom/VNode.js'

export interface ObjectComparison {
  added: {};
  updated: {
    [key: string]: Change;
  };
  removed: {};
  unchanged: {};
}

export interface Change {
  oldValue: any;
  newValue: any;
}

export class ObjectUtils {

  static diff(oldValue: VNode, newValue: VNode, deep = false): ObjectComparison {
    const added = {};
    const updated = {};
    const removed = {};
    const unchanged = {};
    for (const prop in oldValue) {
      if (oldValue.hasOwnProperty(prop)) {
        const newValuePropValue = newValue[prop];
        const oldValuePropValue = oldValue[prop];
        if (newValue.hasOwnProperty(prop)) {
          if (newValuePropValue === oldValuePropValue) {
            unchanged[prop] = oldValuePropValue;
          } else {
            updated[prop] = deep && this.isObject(oldValuePropValue) && this.isObject(newValuePropValue) ? this.diff(oldValuePropValue, newValuePropValue, deep) : { newValue: newValuePropValue };
          }
        } else {
          removed[prop] = oldValuePropValue;
        }
      }
    }
    for (const prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        const oldValuePropValue = oldValue[prop];
        const newValuePropValue = newValue[prop];
        if (oldValue.hasOwnProperty(prop)) {
          if (oldValuePropValue !== newValuePropValue) {
            if (!deep || !this.isObject(oldValuePropValue)) {
              updated[prop].oldValue = oldValuePropValue;
            }
          }
        } else {
          added[prop] = newValuePropValue;
        }
      }
    }
    return { added, updated, removed, unchanged };
  }

  /*
    @return if obj is an Object, including an Array.
   */
  static isObject(obj: any) {
    return obj !== null && typeof obj === 'object';
  }
}