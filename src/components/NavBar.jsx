const NavBar = () => {
  return (
    <div class="grid grid-cols-10 gap-0 h-13 border-b border-black uppercase">
      <div class="relative flex items-center justify-center border-black italic">
        23:25:00 GMT
        <div className="absolute right-0 top-0 h-screen w-px bg-black" />
      </div>
      <div class="col-span-2 flex items-center border-black italic gap-10 ml-10">
        Index
        <div className="w-px h-7 bg-black"></div>
        .01 About
      </div>
      <div class="col-start-7 flex items-center justify-center border-black italic">
        .01 About
      </div>
      <div class="flex items-center justify-center border-black italic">
        .02 Experience
      </div>
      <div class="flex items-center justify-center border-black italic">
        .03 Projects
      </div>
      <div class="relative flex items-center justify-center italic">
        <div className="absolute left-0 top-0 h-screen w-px bg-black" />
        Based in UK
      </div>
    </div>
  );
};

export default NavBar;
