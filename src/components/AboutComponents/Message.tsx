export default function Message() {
  return (
    <div className="absolute -right-48 bottom-32 flex w-[390px] items-center justify-between rounded-full bg-white px-2 py-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] duration-200 group-hover:bottom-52">
      <p className="p-2 text-base font-medium">
        Answered to 12 private messages!
      </p>
      <div className="h-8 w-24 rounded-full bg-[url('https://crysmax.com.br/wp-content/uploads/2020/04/flores-europeias-margaridas-800x800.jpg.webp')] bg-cover"></div>
    </div>
  );
}
