/'Without creating Components folder, just included the components function in App.js file itself.'/

function App(){
  const title = 'Blog Post'
  const body = 'This is my blog post'
 const comments = [
  {id:1, text:'Comment one'},
  {id:2, text:'Comment two'},
  {id:3, text:'Comment three'}
 ]
 const loading = false
 
 if(loading) return<h1>Loading..</h1>
  
  return (
  <div className="container">
    <h2>{title.toUpperCase()}</h2>
  <p>{body}</p>


 <div className="comments">
  <h3> Comments ({comments.length})</h3>
  <ul>
    {comments.map((comment, index) => (
      <li key={index}>{comment.text}</li>
    ))}
  </ul>
 </div>
  </div>
  )
}
export default App

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Out Put

BLOG POST
This is my blog post


Comments (3)
Comment one
Comment two
Comment three

