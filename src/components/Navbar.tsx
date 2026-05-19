import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export const NavBar = () => {
  const [userCity, setUserCity] = useState("");

  function handleForm(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const { value } = e.target;
    setUserCity(value);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (userCity.trim() === "") return;

    console.log(userCity);
  }

  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        <p>Weather</p>
      </div>

      <form onSubmit={handleSubmit}>
        <ButtonGroup>
          <Input
            placeholder="Search..."
            name="city"
            id="city"
            value={userCity}
            onChange={handleForm}
          />
          <Button variant="outline" aria-label="Search">
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </form>
    </nav>
  );
};
