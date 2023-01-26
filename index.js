const express = require('express')
const port = 8088
const app = express()
app.use(require('cors')()) // cors 는 서버 내의 요청이 아닌 외부에서 들어온 요청을 허용하는것
app.use(express.json()) // 서버를 json 구조로 사용
app.use(express.urlencoded({extended: true}))

// app 은 서버의 주체

// post API 만드는법
// app(서버의주체).post(post방식의 api를 만들겠다)('path' api의 경로, (req (사용자가 전달한 내용), res (내가 사용자에게 전달할 내용)=>{
// callback 영역 req 를 가지고 지지고 볶음
// post는 req.body로 사용자가 전달한 내용을 확인 할 수 있음
// req.header엔 사용자의 정보들이 담겨있음 (브라우저 정보, 해당 api를 호출한 url 등)
// res.json 으로 사용자에게 데이터 리턴
// })
app.post('/post-test', (req, res) => {
    console.log(req.body)
    console.log(req.headers)
    res.json({test: true})
})

// get API 만드는법
// app(서버의주체).get(get방식의 api를 만들겠다)('path' api의 경로, (req (사용자가 전달한 내용), res (내가 사용자에게 전달할 내용)=>{
// callback 영역 req 를 가지고 지지고 볶음
// get은 req.query 사용자가 전달한 내용을 확인 할 수 있음
// req.header엔 사용자의 정보들이 담겨있음 (브라우저 정보, 해당 api를 호출한 url 등)
// res.json 으로 사용자에게 데이터 리턴
// })
app.get('/get-test', async (req, res) => {
    const query = req.query
    console.log('이름은 ' + query.name)
    console.log('나이는 ' + query.age)
    res.json({test: true})
})

// get은 보안이 x / post는 보안이 ok

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

// 위에 세팅한 서버 설정으로 서버를 실행
// app 서버 listen 실행(들어라) (port (몇번포트로 실행할것인지))
app.listen(port, () => {
    // 정상실행됐을때
    console.log(`server run on ${port} port`)
})