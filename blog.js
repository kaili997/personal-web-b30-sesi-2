let blogs = []

function addBlog(event) {

    event.preventDefault ()
    
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    //agar gambar bisa diakses maka menggunakan URL

    image = URL.createObjectURL(image[0])

    //console.log(image);

    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Alifia L Nirswany',
        postAt: new Date()
    }
//push untuk mengirim blogs ke blog

    blogs.push(blog)

    console.log(blog)

    console.log(blogs)

    for(let i = 0; i < blogs.length ; i++) {
        console.log(blogs[i]);
    }
    renderBlog()
}

//looping

//for(let angka = 1; angka <= 100; angka++){
  //  console.log(angka);
//}

//manipulation DOM document object model

//function manipulationHTML() {
  //  let contentContainer = document.getElementById('contents')
    //contentContainer.innerHTML = '<p>Selamat Datang</p>'
    //console.log(contentContainer);
//}

//memunculkan apa yang di input

function renderBlog() {
    let contentContainer = document.getElementById('contents')

    contentContainer.innerHTML = ``

    for(let i=0;i<blogs.length;i++) {

        contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>${blogs[i].content}</p>
          <div style="color: gray; font-size: 13px;">
          <span> ${getDistanceTime(blogs[i].postAt)} </span>
        </div>
        </div>
      </div>
    </div>
  </div>`
    }
    // contentContainer.innerHTML = '<p>Selamat Datang</p>'
    // console.log(contentContainer);
}

let month = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getFullTime (time){
console.log(time)

let date = time.getDate()
console.log(date)

let monthIndex = time.getMonth()
console.log(time.getMonth()) //indeks 0-11

let year = time.getFullYear()
console.log(time.getFullYear())

let hours = time.getHours()
console.log(time.getHours())

let minutes = time.getMinutes()
console.log(time.getMinutes())

let fullTime = `${date} ${month[monthIndex]} ${year} ${hours} : ${minutes} WIB`
return fullTime
}

function getDistanceTime() {

  let timePost = new Date ('Wed Jan 04 2022 12:03:25 GMT+0700 (Western Indonesia Time)')
  let timeNow = new Date()

  let distance = timeNow - timePost 
  let milisecond = 1000 //serbibu dalam 1 detik
  let seconds = 60
  let secondInHours = 3600
  let hoursInDay = 23

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
  let distanceHours = Math.floor(distance / (milisecond * secondInHours))
  let distanceHourss = Math.floor(distance / (milisecond * secondInHours))-(distanceDay*hoursInDay)
  let distanceMinutes = Math.floor(distance / (milisecond * seconds))-(distanceDay*hoursInDay*secondInHours)
  let distanceSeconds = Math.floor(distance / (milisecond))-(distanceDay*hoursInDay*secondInHours*seconds)

  if (distanceDay >= 1) {
   console.log (${distanceDay} `day ago` ${distanceHourss} `Hours Ago` ${distanceMinutes} `Minutes Ago`)
  else {
    console.log (${distanceHours} `Hours Ago`)
  } 
  if (distance > 1) {
    console.log (${distanceDay} `day ago` ${distanceHourss} `Hours Ago`
  } 
}

getDistanceTime ()

setInterval (renderBlog,5000)