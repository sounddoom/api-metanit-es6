fetch("http://localhost:3000/api/users",
{method:"POST",
body: JSON.stringify({userName:'John',userAge:24}),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
})
.then(r=>console.log(r))
.then(d=>console.log(d))

fetch("/api/users/1",
{method:"DELETE",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
}).then(r=>console.log(r))
.then(d=>console.log(d))

fetch("/api/users",
{method:"GET",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
}).then(r=>console.log(r))
.then(d=>console.log(d))