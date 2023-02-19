const prevScrollY = useRef(0);
const headRef = useRef(null);

useEffect(() => {
  prevScrollY.current = window.scrollY;

  const handleScroll = (e) =>{
    // const scrollY = window.scrollY;
    // scrollY > prevScrollY.current ? 
    // headRef.current.transform = 'translateY(-200px)' :
    // headRef.current.transform = 'translateY(0)';

    // prevScrollY.current = scrollY >0 ? scrollY : 0;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  
}, [])