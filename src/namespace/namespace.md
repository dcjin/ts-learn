# module namespace

## 理一条简单的时间线

- `TypeScript`: 2012/10 发行
- `ES2015`: 2015/06 定稿

## 1 Module

### 1.1 一些概念

- 模块是自声明的。简单理解，文件只要有了`import`或`export`，它就是一个模块，否则挂载全局下。
- ts对模块的实现也是可以按照目标模块加载器来区分实现，比如`CommonJS`, `AMD`, `UMD`, `SystemJS`, `ES6`
    - 可以修改tsconfig.json中的`module`来实现
- 现代Module请参考ES6

### 1.2 Module(External Module)外部模块

作为早期版本，External Module的语法如下  

```typescript
// 别问为什么不是var foo = require('./foo');
// 更别问什么不是const
import foo = require("./foo");

var newFoo = {};

export = foo; // 类似export default
```

### 1.3 Node中的module.exports 和 exports

    > copy from bihu: require方能看到的只有module.exports这个对象，它看不到exports对象，编写的时候exports对象实际是对module.exports的引用

### 1.4 后期遵循了ES2015的语法规范，External Module则改名叫了Module，专指对外的

```typescript
import foo from './foo';

const newFoo = () => {};

export {
    foo,
    newFoo
};
```

### 1.5 描述非TypeScript编写的模块

你需要`.d.ts`文件来描述你的模块，它同`.h`头文件。  
  
一般推荐写一整个`.d.ts`文件来描述你一整个，但你也可以分开写，比如`@types/node`

### 1.6 TypeScript中一些模块编写习惯、规范指引

- 仅导出某个`class`或者`function`或者其他的对象，推荐使用`export default`
- 如果要导出多个对象，把它们放`顶层`，一目了然。。。看如下例子。。。（其实我习惯写在底层）


```typescript
import foo from './foo';

export function myFoo() {
    foo();
}

export function myFooPlus() {
    foo();
    console.log('plus');
    foo();
}
```

### 1.7 模块里面不要用namespace

因为命名空间对解决全局作用域里命名冲突来说是很重要的  
但现在基于文件的模块系统，这不是一个问题

## 2 Namespace

### 2.1 一些概念

- 早期在`CommonJS`, `AMD`, `UMD`等等还在争谁的理念更好一些的时候，TypeScript引入了namespace的概念
- 当时叫做`Internal Module`
- 区别于CommonJS的文件模块系统和AMD的函数作用域
- Internal Module的作用是，用一套自己的规则来避免全局污染
  
可以这样理解，以前你的html是这样的  
```html
<html>
<head></head>
<body>
<script src="../lib/jquery.js"></script>
<script src="../lib/underscore.js"></script>
<script src="../lib/yourLibName.js"></script>
<script src="../lib/yourLibName2.js"></script>
</body>
</html>
```

- `jquery`有个全局的变量叫做`$`
- `underscore`有个全局的变量叫做`_`
- 可能你的lib1有个全局变量叫做`F`
- 可能你的lib2有个全局变量叫做`K`

命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象。可以帮你做到隔离作用域  

但是大型项目。。。。

- 其实ts有个总的全局作用域对象，你的namespace都挂在下面

### 2.2 namespace引用

参考`InternalModule2` 和 `InternalModuleReference`

    > tsc --outFile ./src/namespace/bundle.js ./src/namespace/InternalModule2.ts ./src/namespace/InternalModuleReference.ts --module amd 

### 2.3 引用第三方库

参考`@types/underscore`

## namespace & module

`使用module`

## 3 Generic(本章节属于关公面前耍大刀)

### 先来一段wiki

[泛型](https://zh.wikipedia.org/wiki/%E6%B3%9B%E5%9E%8B)

    > 泛型程序设计（generic programming）是程序设计语言的一种风格或范式。泛型允许程序员在强类型程序设计语言中编写代码时使用一些以后才指定的类型，在实例化时作为参数指明这些类型。
    > 各种程序设计语言和其编译器、运行环境对泛型的支持均不一样。Ada、Delphi、Eiffel、Java、C#、F#、Swift 和 Visual Basic .NET 称之为泛型（generics）；
    > ML、Scala 和 Haskell 称之为参数多态（parametric polymorphism）；
    > C++ 和 D称之为模板。
    > 具有广泛影响的1994年版的《Design Patterns》一书称之为参数化类型（parameterized type）。
    
    
    
    
    
    
    
### 总结

- 本质是类型参数化
- 编译阶段检查类型转换可能会引起的问题
- 加强类型安全，减少类型转换次数
- 通用方法，一个方法适应多种对象


[bihu](https://zhuanlan.zhihu.com/p/35187125)