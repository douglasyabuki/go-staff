interface NavbarMenuProps {
  toggle: boolean;
  onClose: () => void;
}

export default function NavbarMenu({ toggle, onClose }: NavbarMenuProps) {
  return (
    <>
      <div
        className={`${
          toggle ? `flex` : `hidden`
        } absolute top-0 z-[41] h-screen w-screen bg-opacity-0`}
        onClick={onClose}
      ></div>
      <div
        className={`${
          toggle ? `translate-x-0` : `-translate-x-[400px]`
        } absolute top-0 z-[42] flex h-screen w-[400px] transform-gpu bg-dark-blue-80 shadow-md shadow-transparent-black duration-200 ease-in-out`}
      ></div>
    </>
  );
}
