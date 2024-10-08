// app/about/page.tsx
import cssStyle from "./about.module.css"

console.log(cssStyle,"css-style")
 function Aboutpage() {
  return  (
  
        <h1 className={(cssStyle.color)}>This is my About Page</h1>
      
  )
}
export default Aboutpage ;
// className='bg-yellow-300'