import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: string;
  variant: string;
};

export default function Button({ type, title, icon, variant }: ButtonProps) {
  return (
    <button
      type={type}
      title={title}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}
