import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const index = () => {
  const a = [1, 2, 3];
  return (
    <>
    
      <div className="grid grid-cols-4 gap-5">
        {a.map((v, i) => (
          <div key={i} className="max-w-[500px] bg-slate-800 py-4 px-2">
            <img
              src="https://images.unsplash.com/photo-1705037202436-2e4ade07d823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <h1>Heading</h1>
            </div>
          </div>
        ))}
      </div>
    
    </>
  );
};

export default index;
