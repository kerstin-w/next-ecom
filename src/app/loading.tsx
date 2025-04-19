import Image from 'next/image';
const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image
        src="/assets/loader.gif"
        alt="Loading..."
        width={150}
        height={150}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        priority={true}
      />
    </div>
  );
};

export default LoadingPage;
