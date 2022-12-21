import React,{useState,useEffect} from 'react'

const GiveAway = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pet_type: "",
    breed: "",
  });

  const options = ["Dog", "Cat"];
  const [petType, setPetType] = useState(options[0]);
  const [petBreed, setPetBreed] =useState("German Shepherd");

 useEffect(() => {
    setPetType(petType);
    setFormData({ ...formData, pet_type: petType });
  }, [petType]);
  const handleChangePet = (e) => {
    setPetType(e.target.value);
  };
  const handleChangeBreed = (e) => {
    setPetBreed(e.target.value);
  };
  function DropdownForm() {
    return (
      <form className="flex flex-col justify-center items-start w-[80vw] md:w-[20vw] ">
        <label htmlFor="country">Pet Type</label>

        <select
          className="w-full border-2 border-gray-300 p-2 rounded-lg"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </form>
    );
  }
  const optionsBreedDog = [
    "Poodle",
    "Labrador",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Beagle",
    "Rottweiler",
    "French Bulldog",
    "Yorkshire Terrier",
    "Boxer",
    "Dachshund",
  ];
  const optionsBreedCat = [
    "Persian",
    "Maine Co",
    "Ragdoll",
    "Siamese",
    "Bengal",
    "Sphynx",
    "British",
    "Shorthair",
    "American",
    "Burmese",
    "Russian Blue",
  ];
  function DropdownFormBreedDog() {
    return (
      <form className="flex flex-col justify-center items-start w-[80vw] md:w-[20vw]">
        <label htmlFor="country">Breed</label>

        <select
          className="w-full border-2 border-gray-300 p-2 rounded-lg"
          value={petBreed}
          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
        >
          {optionsBreedDog.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </form>
    );
  }
  function DropdownFormBreedCat() {
    return (
      <form className="flex flex-col justify-center items-start w-[80vw] md:w-[20vw] ">
        <label htmlFor="country">Breed</label>

        <select
          className="w-full border-2 border-gray-300 p-2 rounded-lg"
          value={petBreed}
          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
        >
          {optionsBreedCat.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </form>
    );
  }
  // craete validation for form
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    pet_type: "",
    breed: "",
  });

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let petTypeError = "";
    let breedError = "";
    if (!formData.name) {
      nameError = "Name cannot be blank";
    }
    if (!formData.email.includes("@")) {
      emailError = "Invalid email";
      // check if email is valid
      if (!formData.email.includes(".")) {
        emailError = "Invalid email";
      }
    }
    if (!formData.phone) {
      // check if phone number has 10 digits
      if (formData.phone.length !== 10) {
        phoneError = "Invalid phone number";
      }
      // check if all digits are numbers
      if (!formData.phone.match(/^[0-9]+$/)) {
        phoneError = "Invalid phone number";
      }
      // check if phone number starts with +91
      if (!formData.phone.startsWith("+91")) {
        phoneError = "Invalid phone number";
      }

      phoneError = "Phone cannot be blank";
    }
    if (!formData.pet_type) {
      petTypeError = "Pet type cannot be blank";
      // check if pet type is valid
    }
    if (!formData.breed) {
      breedError = "Breed cannot be blank";
      // check if breed is valid
      if (
        !optionsBreedDog.includes(formData.breed) &&
        !optionsBreedCat.includes(formData.breed)
      ) {
        breedError = "Breed is not valid";
      }
    }
    if (nameError || emailError || phoneError || petTypeError || breedError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
        pet_type: petTypeError,
        breed: breedError,
      });
      return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 mx-16">
    <div className="text-4xl font-semibold">Give away a pet</div>
    <div className="text-xl font-light">What pet do you want to GiveAway ?</div>
    <div className="flex flex-col justify-center items-start">
      <div className="flex ">
        <DropdownForm />
      </div>
      <div className="flex">
        {petType === "Dog" ? (
          <DropdownFormBreedDog />
        ) : (
          <DropdownFormBreedCat />
        )}
      </div>
    </div>
    <div>
      <div className="text-xl font-light">Please fill in your details</div>
      <div className="flex flex-col gap-y-4 mt-8">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-300 p-2 rounded-md w-[80vw] md:w-[20vw]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-gray-300 p-2 rounded-md w-[80vw] lg:w-[20vw]"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone"
          className="border-2 border-gray-300 p-2 rounded-md w-[80vw] md:w-[20vw]"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
      </div>
      <div>
        <button
          className="bg-[#FF6584] text-white p-2 rounded-md my-8"
          onClick={() => {
            const isValid = validate();
            if (isValid) {
              console.log(formData);
              localStorage.setItem(
                "formData_adopt",
                JSON.stringify(formData)
              );
              alert("Form submitted successfully");
            } else {
              alert("Form has errors");
            }
          }}
        >
          Request for giveaway
        </button>
      </div>
    </div>
  </div>
  )

}

export default GiveAway