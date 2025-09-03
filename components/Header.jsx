import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";              // or "./nav"



const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Luke<span className="text-accent">.</span>
                    </h1>
                </Link>
            
                {/* desktop nav and hire me button */}
                <div className="hidden xl:flex">
                    <Nav />
                    <Link href="/contract">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}

export default Header;
