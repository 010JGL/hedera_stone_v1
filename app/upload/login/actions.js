export const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  //console.log("Do something with this data", data);
  const currentEmail = data.email;
  const currentPass = data.password;
  //console.log(`currentPass:`, currentPass)

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: currentEmail,
      password: currentPass,
    }),
  });

  // returns an empty object if password doesnt match
  const data2 = await res.json();
  console.log(`data2:`, data2);
  // checks if object empty
  if (Object.keys(data2).length < 1) {
    alert(`Wrong password`);
  } else {
    // login logic here
    console.log(`login success`);
    alert(`Login success`)
  }
};
