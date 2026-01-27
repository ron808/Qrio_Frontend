import React from 'react';

const HowItWorks = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-qrio-text mb-8 text-center">
        How It Works
      </h1>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-qrio-emerald text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              1
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-qrio-text mb-2">Choose a Category</h3>
              <p className="text-gray-600">Browse through our wide range of quiz categories and pick one that interests you.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-qrio-emerald text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              2
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-qrio-text mb-2">Answer Questions</h3>
              <p className="text-gray-600">Read each question carefully and select your answer. Take your time!</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-qrio-emerald text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              3
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-qrio-text mb-2">Get Your Score</h3>
              <p className="text-gray-600">See how well you did and learn from the answers. Challenge yourself to improve!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;