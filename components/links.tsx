import { FaGithub } from "react-icons/fa"
import { IoOpenOutline } from "react-icons/io5"

type Props = {
  name: string,
  link: string,
}

let MyComponent: React.FC = (props: Props) => {
  return (
    <section className="border-2 border-gray-500 w-72 p-4 m-2 rounded-md hover:translate-y-1 hover:shadow-md hover:shadow-gray-200">
      <section className="dark:text-white text-black">
        <a href={props?.link} className="flex items-center gap-2" target="__blank">
          <FaGithub className="text-3xl m-2" />
          <section className="text-lg font-mono font-regular">{props.name}</section>
          <IoOpenOutline className="text-2xl" />
        </a>
      </section>
    </section>
  )
}

export default MyComponent;
