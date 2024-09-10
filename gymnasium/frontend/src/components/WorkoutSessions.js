// import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>Transform your fitness journey with our top-rated workout sessions. Whether you’re a beginner or a seasoned athlete, our expert trainers will guide you through personalized routines designed to maximize results and keep you motivated.</p>
        <img src="/img9.jpg" alt="gymnasium" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>Join our high-intensity bootcamps for a full-body workout that challenges your strength, endurance, and flexibility. Our bootcamps are designed to push you to your limits and help you achieve your fitness goals faster.</p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>Experience a dynamic high-intensity interval training (HIIT) session that combines cardio and strength exercises. Perfect for burning calories and building muscle in a short amount of time.</p>
          </div>
          <div>
            <h4>Strength & Conditioning</h4>
            <p>Build strength and improve your conditioning with a program that focuses on lifting techniques, functional movements, and endurance training. Ideal for enhancing overall athletic performance.</p>
          </div>
          <div>
            <h4>Yoga & Flexibility</h4>
            <p>Enhance your flexibility and balance with our yoga bootcamp. This session incorporates various poses and stretches to improve your range of motion and reduce stress.</p>
          </div>
          <div>
            <h4>Core Strength Training</h4>
            <p>Focus on strengthening your core muscles with targeted exercises that enhance stability, posture, and balance. Great for improving performance in other workouts and daily activities.</p>
          </div>
          <div>
            <h4>Cardio Blast</h4>
            <p>Boost your cardiovascular health with our Cardio Blast bootcamp. This high-energy session combines running, cycling, and other cardio exercises to help you improve endurance and burn calories efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions;
