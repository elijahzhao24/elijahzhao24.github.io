import profilePic from '../assets/profile.png';

export default function AboutMe() {
  return (
    <div className="AboutMe" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold font-serif text-white mb-3 flex items-center gap-2">
          hi elijah here
          <span className="text-yellow-400 text-5xl">👋</span>
        </h1>
        <div className="flex gap-8">
          <div className="space-y-4">
            <p className="AboutMe-text">
              18-year-old developer and student from Vancouver 🇨🇦
            </p>
            <p className="AboutMe-text">
              I like to develop apps and websites, and blah blah blah blah blah blah blah blah blah blah blah blah
            </p>
          </div>
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: '25vh', height: '25vh' }}
            className="object-cover border-4 shadow-lg ml-8"
          />
        </div>
      </div>
    </div>
  );
}
