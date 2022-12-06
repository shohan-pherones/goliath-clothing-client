import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Newsletter = () => {
  return (
    <div className="newsletter bg-black text-white">
      <div className="container mx-auto py-20 flex justify-between gap-5 items-center">
        <span className="uppercase text-2xl tracking-widest font-bold slide-headline">
          Be in touch with us
        </span>
        <form className="subscribe flex items-center">
          <input
            required
            type="email"
            placeholder="hello@example.com"
            className="bg-transparent outline-none border-2 py-2 px-5 rounded-tl rounded-bl border-white"
          />
          <button
            type="submit"
            className="bg-white text-black py-2 px-5 rounded-tr rounded-br text-xl uppercase font-semibold slide-headline"
          >
            Subscribe
          </button>
        </form>
        <div className="icons flex gap-3">
          <FacebookIcon className="cursor-pointer" />
          <InstagramIcon className="cursor-pointer" />
          <TwitterIcon className="cursor-pointer" />
          <YouTubeIcon className="cursor-pointer" />
          <GoogleIcon className="cursor-pointer" />
          <PinterestIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
