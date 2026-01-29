import Navbar from '../components/Navbar';
import Blogs from '../components/Blogs';

function Home() {
  return (
    <div>
      <Navbar />
      <main className='px-36 py-6'>
        <Blogs />
      </main>
    </div>
  );
}

export default Home;
