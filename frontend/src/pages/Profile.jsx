import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';

const ProfilePage = ({ profileData, setProfileData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: 'Alex Johnson',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        jobTitle: 'Frontend Developer',
    });
    
    const [editData, setEditData] = useState({ 
        name: 'alex', 
        title: 'dev', 
        bio: 'bio', 
        email: 'xyz@mail.com', 
        phone: '12345', 
        location: 'x', 
        skills: [] 
    });
    const [newSkill, setNewSkill] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [activeTab, setActiveTab] = useState('Profile');
    const [avatarPreview, setAvatarPreview] = useState(null);

    useEffect(() => {
        if (profileData) {
            setEditData({
                name: profileData.name || '',
                title: profileData.title || '',
                bio: profileData.bio || '',
                email: profileData.email || '',
                phone: profileData.phone || '',
                location: profileData.location || '',
                skills: profileData.skills || []
            });
        }
    }, [profileData]);

    const handleSave = () => {
        setProfileData(editData);
        if (avatarPreview) {
            setUser({...user, avatar: avatarPreview});
        }
        setIsEditing(false);
        setAvatarPreview(null);
    };

    const handleLogout = useCallback(() => {
        // Logout logic would go here
        alert('Logging out...');
    }, []);

    const handleCancel = () => {
        setEditData({
            name: profileData.name || '',
            title: profileData.title || '',
            bio: profileData.bio || '',
            email: profileData.email || '',
            phone: profileData.phone || '',
            location: profileData.location || '',
            skills: profileData.skills || []
        });
        setIsEditing(false);
        setAvatarPreview(null);
    };

    const addSkill = () => {
        if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
            setEditData({
                ...editData,
                skills: [...editData.skills, newSkill.trim()]
            });
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setEditData({
            ...editData,
            skills: editData.skills.filter(skill => skill !== skillToRemove)
        });
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    setAvatarPreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleFileInput = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    setAvatarPreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleResumeDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
                setUploadedFile(file);
            }
        }
    };

    const handleResumeInput = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
                setUploadedFile(file);
            }
        }
    };

    return (
        <div className="flex h-screen bg-blue-50">
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

            {/* main */}
            <div className='flex-1 rounded-lg space-y-3 overflow-auto'>
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

                <div className='px-3 space-y-3'>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                          {/* Profile Photo */}
                          <div className="flex flex-col items-center">
                              <div 
                                  className="relative group cursor-pointer"
                                  onDragEnter={handleDrag}
                                  onDragLeave={handleDrag}
                                  onDragOver={handleDrag}
                                  onDrop={handleDrop}
                                  onClick={() => document.getElementById('avatar-upload').click()}
                              >
                                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg overflow-hidden">
                                      {avatarPreview ? (
                                          <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                                      ) : profileData?.name ? (
                                          profileData.name.split(' ').map(n => n[0]).join('')
                                      ) : (
                                          'U'
                                      )}
                                  </div>
                                  {isEditing && (
                                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                      </div>
                                  )}
                                  <input
                                      type="file"
                                      id="avatar-upload"
                                      accept="image/*"
                                      onChange={handleFileInput}
                                      className="hidden"
                                  />
                              </div>
                              {isEditing && (
                                  <button 
                                      className="mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                                      onClick={() => document.getElementById('avatar-upload').click()}
                                  >
                                      Change Photo
                                  </button>
                              )}
                          </div>

                          {/* Profile Info */}
                          <div className="flex-1 text-center md:text-left">
                              {isEditing ? (
                                  <div className="space-y-4">
                                      <input
                                          type="text"
                                          value={editData.name}
                                          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                          className="text-3xl font-bold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                          placeholder="Full Name"
                                      />
                                      <input
                                          type="text"
                                          value={editData.title}
                                          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                                          className="text-xl text-gray-600 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                          placeholder="Job Title"
                                      />
                                      <textarea
                                          value={editData.bio}
                                          onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                                          className="text-gray-700 bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
                                          rows="3"
                                          placeholder="Write a short bio about yourself"
                                      />
                                  </div>
                              ) : (
                                  <div>
                                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData?.name || 'Your Name'}</h1>
                                      <p className="text-xl text-gray-600 mb-4">{profileData?.title || 'Your Title'}</p>
                                      <p className="text-gray-700 leading-relaxed">{profileData?.bio || 'Your bio will appear here'}</p>
                                  </div>
                              )}
                          </div>
                      </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                              {isEditing ? (
                                  <input
                                      type="email"
                                      value={editData.email}
                                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                  />
                              ) : (
                                  <p className="text-gray-900">{profileData?.email || 'No email provided'}</p>
                              )}
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                              {isEditing ? (
                                  <input
                                      type="tel"
                                      value={editData.phone}
                                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                  />
                              ) : (
                                  <p className="text-gray-900">{profileData?.phone || 'no phone num provided'}</p>
                              )}
                          </div>
                          <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                              {isEditing ? (
                                  <input
                                      type="text"
                                      value={editData.location}
                                      onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                  />
                              ) : (
                                  <p className="text-gray-900">{profileData?.location || 'no location provided'}</p>
                              )}
                          </div>
                      </div>
                  </div>

                  {/* Skills Section */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
                      
                      {isEditing ? (
                          <div className="mb-6">
                              <div className="flex gap-2 mb-4">
                                  <input
                                      type="text"
                                      value={newSkill}
                                      onChange={(e) => setNewSkill(e.target.value)}
                                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                                      placeholder="Add a skill..."
                                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  />
                                  <button
                                      onClick={addSkill}
                                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                                  >
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                      </svg>
                                      <span className="ml-1">Add</span>
                                  </button>
                              </div>
                              
                              <div className="flex flex-wrap gap-3">
                                  {editData.skills.map((skill, index) => (
                                      <span
                                          key={index}
                                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                      >
                                          {skill}
                                          <button
                                              onClick={() => removeSkill(skill)}
                                              className="text-blue-600 hover:text-blue-800"
                                          >
                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                              </svg>
                                          </button>
                                      </span>
                                  ))}
                              </div>
                          </div>
                      ) : (
                          <div className="flex flex-wrap gap-3">
                              {(profileData?.skills || []).map((skill, index) => (
                                  <span
                                      key={index}
                                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                  >
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      )}
                  </div>

                  {/* Resume Upload */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume</h2>
                      
                      {uploadedFile ? (
                          <div className="border border-gray-200 rounded-lg p-6">
                              <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                          </svg>
                                      </div>
                                      <div>
                                          <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                                          <p className="text-sm text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                      </div>
                                  </div>
                                  <div className="flex gap-2">
                                      <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </button>
                                      <button 
                                          onClick={() => setUploadedFile(null)}
                                          className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                                      >
                                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
                                          </svg>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      ) : (
                          <div
                              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                                  dragActive 
                                      ? 'border-blue-500 bg-blue-50' 
                                      : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                              }`}
                              onDragEnter={handleDrag}
                              onDragLeave={handleDrag}
                              onDragOver={handleDrag}
                              onDrop={handleResumeDrop}
                          >
                              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>
                              </div>
                              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload your resume</h3>
                              <p className="text-gray-600 mb-4">Drag and drop your PDF file here, or click to browse</p>
                              <input
                                  type="file"
                                  accept=".pdf"
                                  onChange={handleResumeInput}
                                  className="hidden"
                                  id="resume-upload"
                              />
                              <label
                                  htmlFor="resume-upload"
                                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                              >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>
                                  Choose File
                              </label>
                              <p className="text-sm text-gray-500 mt-2">PDF files only, max 10MB</p>
                          </div>
                      )}
                  </div>

                  {/* Edit Profile Button at the bottom */}
                  <div className="bg-blue-50  p-6 flex justify-items-start">
                      {isEditing ? (
                          <div className="flex gap-4">
                              <button
                                  onClick={handleSave}
                                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                              >
                                  Save Changes
                              </button>
                              <button
                                  onClick={handleCancel}
                                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                              >
                                  Cancel
                              </button>
                          </div>
                      ) : (
                          <button
                              onClick={() => setIsEditing(true)}
                              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                          >
                              Edit Profile
                          </button>
                      )}
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ProfilePage;