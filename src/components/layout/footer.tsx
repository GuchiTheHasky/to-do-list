import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Footer = () => {
  const signature = "design by Husky... ";

  return (
    <div className="bg-black p-8 text-white">
      <footer>
        <Avatar>
          {signature}
          <AvatarImage
            className="h-12 w-12 rounded-full"
            src="/static/husky.png"
          />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
      </footer>
    </div>
  );
};

export default Footer;
