const tablo=document.getElementById("userTable");
function createProje(){
    let data={
        proje:document.getElementById("proje").value || "Boş",
        dil:document.getElementById("dil").value || "Boş",
        tarih:document.getElementById("tarih").value || "Boş",    
    };
    fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        tablo.innerHTML+=`<tr>
        <td><input type="text" class="form-control" id="" value="${data.proje}"></td>
        <td><input type="text" class="form-control" id="" value="${data.dil}"></td>
        <td><input type="text" class="form-control" id="" value="${data.tarih}"></td>
        <td> <a href="" class="btn btn-warning" onclick="sil(${data.id})" >Sil</a></td>
    </tr>`
    })
}