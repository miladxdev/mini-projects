// fetch api using json server
let resStatus = 0;
let user = {
  url: "http://localhost:3000/employees",

  fetchUser() {
    fetch(this.url)
      .then((response) => {
        resStatus = response.status;
        return response.json();
      })
      .then((data) => {
        this.displayData(data);
      })
      .catch((error) => alert(error));
  },

  displayData(data) {
    console.log(resStatus);
    let table = "",
      tableRow = "",
      tableHeader = "",
      i = 0;
    let firstObject = data[0];
    for (let key in firstObject) tableHeader += `<th>${key}</th>`;

    data.forEach((value, index, arr) => {
      tableRow = `<tr>
                    <td>${value.id}</td>
                    <td>${value.first_name}</td>
                    <td>${value.last_name}</td>
                    <td>${value.email}</td>
                     <td>${value.password}</td>
                </tr>`;

      table += tableRow;

      console.log(value);
    });

    document.querySelector("#info").innerHTML = `<table>${tableHeader}${table}</table>`;
  },
};

function ajaxHttp() {
  const Http = new XMLHttpRequest();
  const url = "http://localhost:3000/employees";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    if (Http.readyState == 4) console.log(Http.responseText);
    console.log(Http.readyState, Http.status, Http.statusText); // 200 is OK
    document.querySelector("#info").innerText = Http.responseText;
  };
}

function asyncAwait() {
  async function fetchData() {
    let url = "http://localhost:3000/employees";
    let response = await fetch(url);
    let data = response.json();
    console.log(data);
    data.forEach((element) => {
      console.log(element);
      document.querySelector("#info").innerHTML += element.first_name + "<br>";
    });
  }

  fetchData();
}

function getUser() {
  let url = "http://localhost:3000/employees";
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = (e) => {
    console.log(xhttp.readyState, xhttp.status, xhttp.statusText);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(JSON.parse(xhttp.responseText));

    }
  };
  xhttp.send();
}

function sendUser() {
  let url = "http://localhost:3000/employees";
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 201) {
      var response = this.responseText;
      user.fetchUser();
      // getUser();
      console.log(response);
    }
  };

  let newUser = {
    id: Math.floor(Math.random() * Math.pow(10, 12)),
    first_name: "Jessie",
    last_name: "Pinkman",
    email: "heyyo@codingt.com",
    password: "*******",
  };
  xhttp.send(JSON.stringify(newUser));
}

// async await
let users = async function () {
  let url = "http://localhost:3000/employees";
  let res = await fetch(url);
  let data = await res.json();

  // console.log(data);
};

