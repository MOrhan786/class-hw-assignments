import cssStyle from "./skills.module.css"
console.log(cssStyle, "css-style")

 function SkillsPage() {
  return (
    <div>
        <h3 className={(cssStyle.style)}>This is my skills page</h3>
    </div>
  )
}
export default SkillsPage