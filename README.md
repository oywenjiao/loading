编写了一个集合了字体，声音，图片的web预加载。适合在移动端使用。<br>
### demo中的load根据需求自己更改<br>
```javascript
new Loading({
    arry:[{
      type:'img',//mp3,img,font
      src:'http://pic.qiantucdn.com/58pic/27/02/50/86F58PICGUh_1024.JPG!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
      success:function(elem){
        //当前加载完成,有返回值elem
        $('body').append('<img src="'+this.src+'"/>');
      }
    },{
      type:'img',//mp3,img,font
      src:'http://pic.qiantucdn.com/58pic/26/99/15/97R58PICYzx_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
      success:function(elem){
        //当前加载完成,有返回值elem
        $('body').append('<img src="'+this.src+'"/>');
      }
    }],
    conduct:function(elem){
      //单次加载完成,有返回值elem
    },
    success:function(n){
      alert('全部加载完')
      //全部加载完成,有返回值n
    }
  })
```
### 特别注意<br>
加载font的时候，css但中必须要使用 @font-face 调用字体。 如下
```css
@font-face{font-family:'造字工房悦黑细体';src:url('font/造字工房悦黑细体.otf') format('truetype');}
```
