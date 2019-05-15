# module namespace

## 理一条简单的时间线

- `TypeScript`: 2012/10 发行
- `ES2015`: 2015/06 定稿

## Module

### 一些概念

- 模块是自声明的。简单理解，文件只要有了`import`||`export`，它就是一个模块，否则挂载全局下。
- ts对模块的实现也是可以按照目标模块加载器来区分实现，比如`CommonJS`, `AMD`, `UMD`, `SystemJS`, `ES6`
    - 可以修改tsconfig.json中的`module`来实现
- 现代Module请参考ES6

### Module(External Module)外部模块

作为早期版本，External Module的语法如下  

```typescript
// 别问为什么不是var foo = require('./foo');
// 更别问什么不是const
import foo = require("./foo");

var newFoo = {};

export = foo; // 类似export default
```

### Node中的module.exports 和 exports

    > copy from bihu: require方能看到的只有module.exports这个对象，它看不到exports对象，编写的时候exports对象实际是对module.exports的引用

### 后期遵循了ES2015的语法规范，External Module则改名叫了Module，专指对外的

```typescript
import foo from './foo';

const newFoo = () => {};

export {
    foo,
    newFoo
};
```

### 描述非TypeScript编写的模块

你需要`.d.ts`文件来描述你的模块，它同`.h`头文件。  
  
一般推荐写一整个`.d.ts`文件来描述你一整个，但你也可以分开写，比如`@types/node`

### TypeScript中一些模块编写习惯、规范指引

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

### 模块里面不要用namespace

因为命名空间对解决全局作用域里命名冲突来说是很重要的  
但现在基于文件的模块系统，这不是一个问题

## Namespace

### 一些概念

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

### namespace引用

参考`InternalModule2` 和 `InternalModuleReference`

    > tsc --outFile ./src/namespace/bundle.js ./src/namespace/InternalModule2.ts ./src/namespace/InternalModuleReference.ts --module amd 

### 引用第三方库

参考`@types/underscore`

## namespace & module

`使用module`