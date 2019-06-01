 <img src="https://img.shields.io/crates/l/rustc-serialize/0.3.24.svg">
 
 * vue-signature v1.0.0
 * (c) 2019-2019 Chasen Gao
 * Released under the MIT/Apache 2.0 License.

 #### Install
```
npm install vue-signature --save
```

#### Use
```
<signature ref="signature"></signature>
```
Developer could customize another ref name for this components.

#### Props
```
lineWidth:{   // Set stroke width
    type: String,
    default: '5'
},
lineColor:{   // Set stroke color
    type: String,
    default: '#ff0000'
},
background:{ // Set canvas background color
    type: String,
    default: '#dddddd'
},
bgOpacity:{ // Set canvas opacity
    type: String,
    default: '1'
}
```

#### API & examples in vue-cli3
1. Get base64 content

```javascript
    this.$refs['signature'].getBase64PNG()
```
function would return a string of base64.


2. Get the base64 content which rotated 90 degrees counterclockwise on canvas.
```javascript
    this.$refs['signature'].getHorizontal(function(value) {
      console.log(value)
    })
```
function would return a string of base64 in callback function.

3. Reset Canvas to default status.
```javascript
    this.$refs['signature'].reset()
```
canvas would be clean.

4. Get Blob
```javascript
    this.$refs['signature'].getBlob()
```
function would return a blob object.

5. Get File
```javascript
    this.$refs['signature'].getFile()
```
function would return a file object.

6. undo
```javascript
    this.$refs['signature'].undo()
```

7. redo
```javascript
    this.$refs['signature'].redo()
```

8. draw
```javascript
    this.$refs['signature'].draw(base64)
```

set a base64 parameter then use this function to draw the content into the canvas.


#### About Author
Chasen Gao

97657612@qq.com

salty0114@foxmail.com

