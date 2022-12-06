const Footer = () => {
  return (
    <footer className="footer bg-gray-100 text-gray-500">
      <div className="container mx-auto py-20 flex flex-col gap-10">
        <div className="top flex">
          <div className="flex flex-col gap-1 flex-1">
            <span className="uppercase tracking-widest font-bold text-gray-900">
              Categories
            </span>
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
            <span>Accessories</span>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <span className="uppercase tracking-widest font-bold text-gray-900">
              Links
            </span>
            <span>FAQ</span>
            <span>Blogs</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <span className="uppercase tracking-widest font-bold text-gray-900">
              Offers
            </span>
            <span>Sale</span>
            <span>Promos</span>
            <span>Free Gifts</span>
            <span>Giveaways</span>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <span className="uppercase tracking-widest font-bold text-gray-900">
              Help center
            </span>
            <span>Support</span>
            <span>Ask</span>
            <span>Emergency</span>
            <span>Report</span>
          </div>
        </div>
        <div className="bottom border-t pt-5 flex items-center justify-between">
          <div className="left flex gap-5 items-center ">
            <span className="logo uppercase text-2xl tracking-widest font-bold text-gray-900 slide-headline">
              Goliath.
            </span>
            <p>
              Copyright &copy; {new Date().getFullYear()} Goliath Clothing. All
              rights reserved.
            </p>
          </div>
          <div className="right">
            <p>
              * If we can be of assistance, please do not hesitate to contact us
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
