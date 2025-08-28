import { useState,useCallback } from 'react';
import { Link } from 'react-router';

const SavedJobsPage = () => {
  const [viewMode, setViewMode] = useState('grid'); 
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '2 days ago',
      description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building user-facing features using React and modern web technologies.',
      tags: ['React', 'JavaScript', 'TypeScript', 'CSS'],
      logo: 'TC',
      saved: true
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateCorp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      posted: '1 week ago',
      description: 'Join our product team to drive innovation and lead cross-functional teams in developing cutting-edge solutions.',
      tags: ['Product Strategy', 'Agile', 'Analytics', 'Leadership'],
      logo: 'IC',
      saved: true
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'DesignHub',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80k - $110k',
      posted: '3 days ago',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications. Work closely with developers and product managers.',
      tags: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
      logo: 'DH',
      saved: true
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$90k - $130k',
      posted: '5 days ago',
      description: 'Build and maintain web applications using modern technologies. Work in a fast-paced startup environment with opportunities for growth.',
      tags: ['Node.js', 'React', 'MongoDB', 'AWS'],
      logo: 'SX',
      saved: true
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $150k',
      posted: '1 week ago',
      description: 'Analyze complex datasets and build machine learning models to drive business insights and decision-making.',
      tags: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      logo: 'DT',
      saved: true
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudFirst',
      location: 'Denver, CO',
      type: 'Full-time',
      salary: '$105k - $145k',
      posted: '4 days ago',
      description: 'Manage cloud infrastructure and CI/CD pipelines. Ensure scalability, security, and reliability of our systems.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      logo: 'CF',
      saved: true
    }
  ]);
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    jobTitle: 'Frontend Developer',
   });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [activeTab, setActiveTab] = useState('Saved Jobs');

  const handleLogout = useCallback(() => {
          // Logout logic would go here
          alert('Logging out...');
  }, []);


  const handleUnsaveJob = (jobId) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  const filteredJobs = savedJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || job.type.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6 bg-white">
          <h1 className="text-2xl font-bold text-blue-600">JobSeek</h1>
        </div>
        <nav className="mt-6">
          <Link to="/dashboard" 
            className={`flex items-center cursor-pointer px-6 py-3 ${activeTab === 'Dashboard' ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
            onClick={() => setActiveTab('Dashboard')}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span className="mx-4 font-medium">Dashboard</span>
          </Link>
          
          <Link to="/profile" 
            className={`flex items-center cursor-pointer px-6 py-3 ${activeTab === 'Profile' ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
            onClick={() => setActiveTab('Profile')}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="mx-4 font-medium">Profile</span>
          </Link>
          
          <Link to="/savedjobs" 
            className={`flex items-center cursor-pointer px-6 py-3 ${activeTab === 'Saved Jobs' ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
            onClick={() => setActiveTab('Saved Jobs')}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            <span className="mx-4 font-medium">Saved Jobs</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 rounded-lg space-y-3 overflow-auto">
        {/* Header Section */}
        <header className="flex items-center justify-between p-5 bg-white shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-800">{activeTab}</h2>
                    <div className="flex items-center ">
                    
                        <div className="flex items-center ">
                            <div className="mr-2  text-right">
                                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.jobTitle}</p>
                            </div>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src={user.avatar} alt="User avatar" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>

                            <div className='pl-4'>
                                <button 
                                    onClick={handleLogout}
                                    className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>

                        </div>
                    </div>
        </header>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-black d  text-xl">You have {savedJobs.length} saved jobs</h1>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                />
              </div>
              
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
                <option value="part-time">Part-time</option>
              </select>
              
              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 flex items-center gap-2 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 flex items-center gap-2 transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Display */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6.341" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find more jobs.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 ${
                  viewMode === 'list' ? 'p-6' : 'p-6'
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg leading-tight">{job.title}</h3>
                          <p className="text-gray-600 font-medium">{job.company}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleUnsaveJob(job.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove from saved"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.posted}
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm line-clamp-3">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {job.tags.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{job.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Apply Now
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {job.logo}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xl mb-1">{job.title}</h3>
                          <p className="text-gray-600 font-medium text-lg">{job.company}</p>
                        </div>
                        <button
                          onClick={() => handleUnsaveJob(job.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                          title="Remove from saved"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6.341" />
                          </svg>
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.posted}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {job.tags.slice(0, 4).map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {job.tags.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              +{job.tags.length - 4} more
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2 flex-shrink-0">
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Apply Now
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobsPage;