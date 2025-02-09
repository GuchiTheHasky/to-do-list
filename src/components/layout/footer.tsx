import { useTaskContext } from "@/context/task-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Footer = () => {
  const signature = "design by Husky... ";
  const { tasks } = useTaskContext();

  return (
    <div className="bg-slate-700 text-white p-8">
      <div className="flex justify-between">
        <div>
          <span className="text-2xl font-bold">
            Total count: {tasks.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>{signature}</span>
          <Avatar>
            <AvatarImage
              className="h-12 w-12 rounded-full"
              src="/static/husky.png"
            />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Footer;
