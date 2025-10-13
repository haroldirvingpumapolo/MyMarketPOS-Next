import { products, categories, brands } from "@/app/cash-register/mockData";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function CashRegister() {

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="w-8"></div>
        <InputGroup className="">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
      </div>

      <h2 className="my-4">Category</h2>

      {categories.map((cat) => (
        <Button key={cat.id} className="">
          {cat.icon} {cat.name}
        </Button>
      ))}
    </div>
  );
}
