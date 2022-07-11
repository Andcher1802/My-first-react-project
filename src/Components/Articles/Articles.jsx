import  {React , useState, useEffect}  from 'react'
import styles from './Article.module.scss'


const Articles = () =>{

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()

                setPosts(data)
            }catch(error){
                console.log(error)
                
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return(
        <div>
            <h1>Arcticles</h1>
            {loading && 'loading...'}

            <div className={styles.wrapper}>

                {posts.map(post =>{
                    return(        
                        
                        <div key={post.id} className={styles.card}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <a href="/">Read more</a>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default Articles