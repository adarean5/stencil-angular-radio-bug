/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomInput {
        "disabled": boolean;
        "value": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SimpleInput {
        "value": string;
    }
}
export interface CustomInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCustomInputElement;
}
export interface MyComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyComponentElement;
}
export interface SimpleInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSimpleInputElement;
}
declare global {
    interface HTMLCustomInputElementEventMap {
        "myChange": string;
    }
    interface HTMLCustomInputElement extends Components.CustomInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCustomInputElementEventMap>(type: K, listener: (this: HTMLCustomInputElement, ev: CustomInputCustomEvent<HTMLCustomInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCustomInputElementEventMap>(type: K, listener: (this: HTMLCustomInputElement, ev: CustomInputCustomEvent<HTMLCustomInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCustomInputElement: {
        prototype: HTMLCustomInputElement;
        new (): HTMLCustomInputElement;
    };
    interface HTMLMyComponentElementEventMap {
        "simpleEvent": string;
        "objectEvent": {
    count: number,
    text: string,
    isSomething: boolean
  };
    }
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyComponentElementEventMap>(type: K, listener: (this: HTMLMyComponentElement, ev: MyComponentCustomEvent<HTMLMyComponentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyComponentElementEventMap>(type: K, listener: (this: HTMLMyComponentElement, ev: MyComponentCustomEvent<HTMLMyComponentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSimpleInputElementEventMap {
        "myChange": string;
    }
    interface HTMLSimpleInputElement extends Components.SimpleInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSimpleInputElementEventMap>(type: K, listener: (this: HTMLSimpleInputElement, ev: SimpleInputCustomEvent<HTMLSimpleInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSimpleInputElementEventMap>(type: K, listener: (this: HTMLSimpleInputElement, ev: SimpleInputCustomEvent<HTMLSimpleInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSimpleInputElement: {
        prototype: HTMLSimpleInputElement;
        new (): HTMLSimpleInputElement;
    };
    interface HTMLElementTagNameMap {
        "custom-input": HTMLCustomInputElement;
        "my-component": HTMLMyComponentElement;
        "simple-input": HTMLSimpleInputElement;
    }
}
declare namespace LocalJSX {
    interface CustomInput {
        "disabled"?: boolean;
        "onMyChange"?: (event: CustomInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        /**
          * Emits an event that contains an object
         */
        "onObjectEvent"?: (event: MyComponentCustomEvent<{
    count: number,
    text: string,
    isSomething: boolean
  }>) => void;
        /**
          * Emits a simple event that only contains a string
         */
        "onSimpleEvent"?: (event: MyComponentCustomEvent<string>) => void;
    }
    interface SimpleInput {
        "onMyChange"?: (event: SimpleInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "custom-input": CustomInput;
        "my-component": MyComponent;
        "simple-input": SimpleInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-input": LocalJSX.CustomInput & JSXBase.HTMLAttributes<HTMLCustomInputElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "simple-input": LocalJSX.SimpleInput & JSXBase.HTMLAttributes<HTMLSimpleInputElement>;
        }
    }
}