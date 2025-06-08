const shoulderExerciseDump = [
    {
        "name": "Seated Dumbbell Shoulder Press",
        "category": "Shoulders",
        "description": "Press dumbbells overhead while seated to target deltoids with core support."
    },
    {
        "name": "Standing Barbell Overhead Press",
        "category": "Shoulders",
        "description": "A compound movement targeting shoulders, triceps, and upper chest."
    },
    {
        "name": "Arnold Press",
        "category": "Shoulders",
        "description": "A shoulder press variation involving rotation for more deltoid activation."
    },
    {
        "name": "Lateral Raise",
        "category": "Shoulders",
        "description": "Isolation exercise targeting the lateral (side) deltoids."
    },
    {
        "name": "Front Raise",
        "category": "Shoulders",
        "description": "Lifts weights in front of the body to isolate the front deltoids."
    },
    {
        "name": "Rear Delt Fly",
        "category": "Shoulders",
        "description": "Targets the rear deltoids to improve shoulder balance and posture."
    },
    {
        "name": "Cable Lateral Raise",
        "category": "Shoulders",
        "description": "Constant tension lateral raise using cables for side deltoid development."
    },
    {
        "name": "Face Pull",
        "category": "Shoulders",
        "description": "Great for rear delts and rotator cuff health using cables or bands."
    },
    {
        "name": "Push Press",
        "category": "Shoulders",
        "description": "Explosive overhead press using leg drive to lift heavier loads."
    },
    {
        "name": "Machine Shoulder Press",
        "category": "Shoulders",
        "description": "Controlled pressing movement using a machine to isolate deltoids safely."
    }
]
const chestExerciseDump = [
    {
        "name": "Barbell Bench Press",
        "category": "Chest",
        "description": "Compound lift targeting the chest, shoulders, and triceps using a barbell."
    },
    {
        "name": "Incline Bench Press",
        "category": "Chest",
        "description": "Targets the upper chest using a bench inclined at 30–45 degrees."
    },
    {
        "name": "Decline Bench Press",
        "category": "Chest",
        "description": "Focuses on the lower chest with a declined bench position."
    },
    {
        "name": "Dumbbell Chest Press",
        "category": "Chest",
        "description": "Allows greater range of motion and balance activation compared to barbell presses."
    },
    {
        "name": "Chest Fly (Dumbbell or Machine)",
        "category": "Chest",
        "description": "Isolation movement that stretches and contracts the chest."
    },
    {
        "name": "Incline Dumbbell Press",
        "category": "Chest",
        "description": "Upper chest exercise with increased stability demands."
    },
    {
        "name": "Push-Ups",
        "category": "Chest",
        "description": "Bodyweight chest exercise engaging core and triceps."
    },
    {
        "name": "Cable Crossover",
        "category": "Chest",
        "description": "Cable-based fly motion that keeps constant tension on the pecs."
    },
    {
        "name": "Machine Chest Press",
        "category": "Chest",
        "description": "Guided chest pressing motion suitable for beginners and controlled overload."
    },
    {
        "name": "Pec Deck (Butterfly Machine)",
        "category": "Chest",
        "description": "Machine fly motion that isolates chest with reduced shoulder strain."
    }
]
const backExerciseDump = [
    {
        "name": "Pull-Ups",
        "category": "Back",
        "description": "Bodyweight exercise targeting the upper back and biceps."
    },
    {
        "name": "Bent-Over Barbell Row",
        "category": "Back",
        "description": "Compound movement for overall back development using a barbell."
    },
    {
        "name": "Lat Pulldown",
        "category": "Back",
        "description": "Machine-based exercise focusing on the latissimus dorsi muscles."
    },
    {
        "name": "Seated Cable Row",
        "category": "Back",
        "description": "Rowing motion that targets the middle back with constant tension."
    },
    {
        "name": "Deadlift",
        "category": "Back",
        "description": "Full-body lift that heavily engages the lower back, glutes, and hamstrings."
    },
    {
        "name": "T-Bar Row",
        "category": "Back",
        "description": "Rowing variation that emphasizes the middle back with a T-bar setup."
    },
    {
        "name": "Single-Arm Dumbbell Row",
        "category": "Back",
        "description": "Unilateral row that improves muscle imbalances in the back."
    },
    {
        "name": "Face Pulls",
        "category": "Back",
        "description": "Targets rear delts and upper back for shoulder health and posture."
    },
    {
        "name": "Inverted Rows",
        "category": "Back",
        "description": "Bodyweight row variation that can be adjusted for difficulty."
    },
    {
        "name": "Machine Back Extension",
        "category": "Back",
        "description": "Strengthens lower back muscles with controlled extension movements."
    }
]
const legExerciseDump = [
    {
        "name": "Barbell Squat",
        "category": "Legs",
        "description": "Compound movement targeting quads, hamstrings, and glutes with a barbell."
    },
    {
        "name": "Leg Press",
        "category": "Legs",
        "description": "Machine-based exercise that allows for heavy loading of the legs."
    },
    {
        "name": "Lunges (Walking or Stationary)",
        "category": "Legs",
        "description": "Unilateral leg exercise that improves balance and strength in quads and glutes."
    },
    {
        "name": "Deadlift (Conventional or Romanian)",
        "category": "Legs",
        "description": "Full-body lift focusing on hamstrings, glutes, and lower back."
    },
    {
        "name": "Leg Curl",
        "category": "Legs",
        "description": "Isolation exercise for hamstrings using a leg curl machine."
    },
    {
        "name": "Leg Extension",
        "category": "Legs",
        "description": "Isolation movement for the quadriceps using a leg extension machine."
    },
    {
        "name": "Calf Raises (Standing or Seated)",
        "category": "Legs",
        "description": "Targets the calf muscles with variations for standing or seated positions."
    },
    {
        "name": "Glute Bridge",
        "category": "Legs",
        "description": "Bodyweight or weighted exercise focusing on glute activation and strength."
    },
    {
        "name": "Hip Thrust",
        "category": "Legs",
        "description": "Targeted glute exercise using a barbell or bodyweight for hip extension."
    },
    {
        "name": "Box Jumps",
        "category": "Legs",
        "description": "Plyometric exercise that builds explosive leg power and strength."
    }
]
const armExerciseDump = [
    {
        "name": "Bicep Curl (Barbell or Dumbbell)",
        "category": "Arms",
        "description": "Isolation exercise for biceps using a barbell or dumbbells."
    },
    {
        "name": "Tricep Dips",
        "category": "Arms",
        "description": "Bodyweight exercise targeting triceps, can be done on parallel bars or a bench."
    },
    {
        "name": "Skull Crushers",
        "category": "Arms",
        "description": "Tricep isolation exercise using a barbell or dumbbells, performed lying down."
    },
    {
        "name": "Hammer Curl",
        "category": "Arms",
        "description": "Bicep curl variation that targets the brachialis and brachioradialis."
    },
    {
        "name": "Overhead Tricep Extension",
        "category": "Arms",
        "description": "Tricep exercise performed overhead with a dumbbell or cable."
    },
    {
        "name": "Cable Tricep Pushdown",
        "category": "Arms",
        "description": "Tricep isolation exercise using a cable machine for constant tension."
    },
    {
        "name": "Concentration Curl",
        "category": "Arms",
        "description": "Isolation bicep curl performed seated to focus on peak contraction."
    },
    {
        "name": "Preacher Curl",
        "category": "Arms",
        "description": "Bicep curl variation performed on a preacher bench for isolation."
    },
    {
        "name": "Cable Bicep Curl",
        "category": "Arms",
        "description": "Bicep curl using a cable machine for constant tension throughout the movement."
    },
    {
        "name": "Tricep Kickbacks",
        "category": "Arms",
        "description": "Isolation exercise for triceps using dumbbells or cables, performed bent over."
    }
];
const coreExerciseDump = [
    {
        "name": "Plank",
        "category": "Core",
        "description": "Isometric core exercise that engages the entire core for stability."
    },
    {
        "name": "Russian Twist",
        "category": "Core",
        "description": "Rotational movement that targets the obliques and entire core."
    },
    {
        "name": "Bicycle Crunch",
        "category": "Core",
        "description": "Dynamic core exercise that engages the rectus abdominis and obliques."
    },
    {
        "name": "Leg Raises",
        "category": "Core",
        "description": "Targets the lower abs by lifting the legs while lying down."
    },
    {
        "name": "Mountain Climbers",
        "category": "Core",
        "description": "Cardio and core exercise that engages the entire core while moving."
    },
    {
        "name": "Hanging Knee Raises",
        "category": "Core",
        "description": "Targets the lower abs by raising the knees while hanging from a bar."
    },
    {
        "name": "Side Plank",
        "category": "Core",
        "description": "Isometric exercise that targets the obliques and improves lateral stability."
    },
    {
        "name": "Flutter Kicks",
        "category": "Core",
        "description": "Dynamic exercise that targets the lower abs and hip flexors."
    },
    {
        "name": "Ab Wheel Rollout",
        "category": "Core",
        "description": "Advanced core exercise that engages the entire core while rolling out on an ab wheel."
    },
    {
        "name": "Cable Woodchoppers",
        "category": "Core",
        "description": "Rotational movement using a cable machine to target the obliques and core."
    }
];
const cardioExerciseDump = [
    {
        "name": "Running",
        "category": "Cardio",
        "description": "High-impact cardio exercise that improves cardiovascular endurance and burns calories."
    },
    {
        "name": "Cycling",
        "category": "Cardio",
        "description": "Low-impact cardio exercise that can be done outdoors or on a stationary bike."
    },
    {
        "name": "Rowing",
        "category": "Cardio",
        "description": "Full-body cardio exercise that engages the upper and lower body using a rowing machine."
    },
    {
        "name": "Jump Rope",
        "category": "Cardio",
        "description": "High-intensity cardio exercise that improves coordination and burns calories."
    },
    {
        "name": "HIIT (High-Intensity Interval Training)",
        "category": "Cardio",
        "description": "Short bursts of intense exercise followed by rest or low-intensity periods for maximum calorie burn."
    },
    {
        "name": "Swimming",
        "category": "Cardio",
        "description": "Low-impact full-body cardio exercise that improves endurance and strength."
    },
    {
        "name": "Stair Climbing",
        "category": "Cardio",
        "description": "Cardio exercise that targets the lower body while improving cardiovascular fitness."
    },
    {
        "name": "Elliptical Trainer",
        "category": "Cardio",
        "description": "Low-impact cardio exercise that simulates running or walking with reduced joint stress."
    },
    {
        "name": "Boxing or Kickboxing",
        "category": "Cardio",
        "description": "High-intensity cardio workout that combines punches and kicks for full-body conditioning."
    },
    {
        "name": "Dance Cardio",
        "category": "Cardio",
        "description": "Fun and engaging cardio workout that combines dance movements for cardiovascular fitness."
    }
];
const flexibilityExerciseDump = [
    {
        "name": "Static Stretching",
        "category": "Flexibility",
        "description": "Holding stretches for a period to improve flexibility and range of motion."
    },
    {
        "name": "Dynamic Stretching",
        "category": "Flexibility",
        "description": "Active movements that stretch the muscles through their full range of motion."
    },
    {
        "name": "Yoga",
        "category": "Flexibility",
        "description": "Mind-body practice that combines physical postures, breathing exercises, and meditation to improve flexibility and relaxation."
    },
    {
        "name": "Pilates",
        "category": "Flexibility",
        "description": "Low-impact exercise method focusing on core strength, flexibility, and overall body awareness."
    },
    {
        "name": "Foam Rolling",
        "category": "Flexibility",
        "description": "Self-myofascial release technique using a foam roller to relieve muscle tightness and improve flexibility."
    },
    {
        "name": "Active Isolated Stretching",
        "category": "Flexibility",
        "description": "Stretching technique that involves holding a stretch for a short duration and repeating it multiple times to improve flexibility."
    },
    {
        "name": "Ballistic Stretching",
        "category": "Flexibility",
        "description": "Dynamic stretching technique that uses momentum to push the muscles beyond their normal range of motion."
    },
    {
        "name": "PNF Stretching (Proprioceptive Neuromuscular Facilitation)",
        "category": "Flexibility",
        "description": "Advanced stretching technique that involves contracting and relaxing muscles to improve flexibility."
    },
    {
        "name": "Tai Chi",
        "category": "Flexibility",
        "description": "Ancient Chinese martial art that combines slow, controlled movements with deep breathing to improve flexibility and balance."
    },
    {
        "name": "Dance Flexibility Exercises",
        "category": "Flexibility",
        "description": "Flexibility exercises derived from dance movements to improve overall flexibility and body awareness."
    }
];
const warmUpExerciseDump = [
    {
        "name": "Arm Circles",
        "category": "Warm-Up",
        "description": "Circular movements of the arms to warm up the shoulder joints and increase blood flow."
    },
    {
        "name": "Leg Swings",
        "category": "Warm-Up",
        "description": "Dynamic movement that swings the legs forward and backward to loosen the hip joints."
    },
    {
        "name": "High Knees",
        "category": "Warm-Up",
        "description": "Running in place while lifting the knees high to increase heart rate and warm up the lower body."
    },
    {
        "name": "Butt Kicks",
        "category": "Warm-Up",
        "description": "Running in place while kicking the heels towards the glutes to warm up the hamstrings."
    },
    {
        "name": "Torso Twists",
        "category": "Warm-Up",
        "description": "Rotational movement of the torso to warm up the spine and core muscles."
    },
    {
        "name": "Walking Lunges",
        "category": "Warm-Up",
        "description": "Dynamic lunge movement that warms up the legs and improves flexibility in the hips."
    },
    {
        "name": "Jumping Jacks",
        "category": "Warm-Up",
        "description": "Full-body exercise that increases heart rate and warms up the entire body."
    },
    {
        "name": "Hip Circles",
        "category": "Warm-Up",
        "description": "Circular movements of the hips to loosen the hip joints and improve mobility."
    },
    {
        "name": "Ankle Rolls",
        "category": "Warm-Up",
        "description": "Rotational movements of the ankles to warm up the ankle joints and improve flexibility."
    },
    {
        "name": "Dynamic Chest Opener",
        "category": "Warm-Up",
        "description": "Movement that opens up the chest and shoulders to prepare for upper body exercises."
    }
];
const coolDownExerciseDump = [
    {
        "name": "Static Stretching",
        "category": "Cool Down",
        "description": "Holding stretches for a period to relax muscles and improve flexibility after exercise."
    },
    {
        "name": "Foam Rolling",
        "category": "Cool Down",
        "description": "Self-myofascial release technique using a foam roller to relieve muscle tightness and soreness."
    },
    {
        "name": "Deep Breathing Exercises",
        "category": "Cool Down",
        "description": "Breathing techniques that promote relaxation and help lower heart rate after exercise."
    },
    {
        "name": "Gentle Yoga Poses",
        "category": "Cool Down",
        "description": "Gentle yoga poses that promote relaxation and flexibility after a workout."
    },
    {
        "name": "Walking",
        "category": "Cool Down",
        "description": "Low-intensity walking to gradually lower heart rate and promote recovery after exercise."
    },
    {
        "name": "Child's Pose",
        "category": "Cool Down",
        "description": "Restorative yoga pose that stretches the back and promotes relaxation."
    },
    {
        "name": "Cat-Cow Stretch",
        "category": "Cool Down",
        "description": "Gentle spinal movement that stretches the back and improves flexibility."
    },
    {
        "name": "Seated Forward Bend",
        "category": "Cool Down",
        "description": "Seated stretch that targets the hamstrings and lower back for relaxation."
    },
    {
        "name": "Lying Spinal Twist",
        "category": "Cool Down",
        "description": "Gentle twist that stretches the spine and promotes relaxation."
    },
    {
        "name": "Neck Stretches",
        "category": "Cool Down",
        "description": "Gentle stretches for the neck to relieve tension and promote relaxation."
    }
];
const fullBodyExerciseDump = [
    {
        "name": "Burpees",
        "category": "Full Body",
        "description": "High-intensity exercise combining a squat, push-up, and jump to work the entire body."
    },
    {
        "name": "Kettlebell Swings",
        "category": "Full Body",
        "description": "Dynamic movement that engages the hips, glutes, core, and shoulders using a kettlebell."
    },
    {
        "name": "Thrusters",
        "category": "Full Body",
        "description": "Combination of a front squat and overhead press that targets multiple muscle groups."
    },
    {
        "name": "Medicine Ball Slams",
        "category": "Full Body",
        "description": "Explosive movement that engages the core, shoulders, and legs by slamming a medicine ball."
    },
    {
        "name": "Battle Ropes",
        "category": "Full Body",
        "description": "High-intensity exercise using ropes to engage the upper body, core, and legs."
    },
    {
        "name": "Box Jumps",
        "category": "Full Body",
        "description": "Plyometric exercise that builds explosive power in the legs and engages the core."
    },
    {
        "name": "TRX Rows",
        "category": "Full Body",
        "description": "Suspension training exercise that targets the back, arms, and core."
    },
    {
        "name": "Dumbbell Snatch",
        "category": "Full Body",
        "description": "Explosive movement that works the entire body with a focus on power and coordination."
    },
    {
        "name": "Sled Push/Pull",
        "category": "Full Body",
        "description": "Strength and conditioning exercise that engages the legs, core, and upper body."
    },
    {
        "name": "Farmer's Walk",
        "category": "Full Body",
        "description": "Functional exercise that involves carrying heavy weights to improve grip strength and overall stability."
    }
];
const plyometricExerciseDump = [
    {
        "name": "Box Jumps",
        "category": "Plyometrics",
        "description": "Explosive jump onto a box or platform to build leg power and explosiveness."
    },
    {
        "name": "Jump Squats",
        "category": "Plyometrics",
        "description": "Squat followed by an explosive jump to improve lower body power and strength."
    },
    {
        "name": "Burpees",
        "category": "Plyometrics",
        "description": "Full-body exercise combining a squat, push-up, and jump for explosive movement."
    },
    {
        "name": "Lateral Bounds",
        "category": "Plyometrics",
        "description": "Side-to-side jumps that improve lateral power and agility."
    },
    {
        "name": "Tuck Jumps",
        "category": "Plyometrics",
        "description": "Jumping exercise where knees are pulled towards the chest for explosive power."
    },
    {
        "name": "Depth Jumps",
        "category": "Plyometrics",
        "description": "Jumping down from a height and immediately jumping back up to improve reactive strength."
    },
    {
        "name": "Plyometric Push-Ups",
        "category": "Plyometrics",
        "description": "Explosive push-up variation where hands leave the ground for increased upper body power."
    },
    {
        "name": "Single-Leg Bounds",
        "category": "Plyometrics",
        "description": "Single-leg jumps that improve unilateral leg power and balance."
    },
    {
        "name": "Broad Jumps",
        "category": "Plyometrics",
        "description": "Long horizontal jumps that develop lower body explosiveness and coordination."
    },
    {
        "name": "Clapping Push-Ups",
        "category": "Plyometrics",
        "description": "Push-up variation where hands clap together at the top of the movement for explosive upper body strength."
    }
]
const balanceExerciseDump = [
    {
        "name": "Single-Leg Stand",
        "category": "Balance",
        "description": "Standing on one leg to improve stability and balance."
    },
    {
        "name": "Balance Board Exercises",
        "category": "Balance",
        "description": "Using a balance board to challenge stability and core strength."
    },
    {
        "name": "Bosu Ball Squats",
        "category": "Balance",
        "description": "Squats performed on a Bosu ball to enhance balance and lower body strength."
    },
    {
        "name": "Heel-to-Toe Walk",
        "category": "Balance",
        "description": "Walking in a straight line placing the heel of one foot directly in front of the toes of the other."
    },
    {
        "name": "Tai Chi",
        "category": "Balance",
        "description": "Martial art focusing on slow, controlled movements to improve balance and coordination."
    },
    {
        "name": "Yoga Tree Pose",
        "category": "Balance",
        "description": "Standing on one leg with the other foot placed on the inner thigh or calf of the standing leg."
    },
    {
        "name": "Lateral Leg Raises",
        "category": "Balance",
        "description": "Raising one leg to the side while maintaining balance on the other leg."
    },
    {
        "name": "Stability Ball Pass",
        "category": "Balance",
        "description": "Passing a stability ball between hands and feet while lying on your back to engage core and improve balance."
    },
    {
        "name": "Side Lunges with Reach",
        "category": "Balance",
        "description": "Lunging to the side while reaching towards the ground to enhance lateral stability."
    },
    {
        "name": "Pilates Balance Exercises",
        "category": "Balance",
        "description": "Pilates movements that focus on core strength and balance, such as the Pilates Teaser."
    }
];
const functionalExerciseDump = [
    {
        name: "Kettlebell Swings",
        category: "Functional",
        description: "Dynamic movement that mimics real-life activities, engaging the hips, glutes, core, and shoulders."
    },
    {
        name: "Medicine Ball Throws",
        category: "Functional",
        description: "Explosive throws with a medicine ball to improve upper body power and coordination."
    },
    {
        name: "Farmer's Walk",
        category: "Functional",
        description: "Carrying heavy weights in each hand to improve grip strength, core stability, and overall functional strength."
    },
    {
        name: "Battle Ropes",
        category: "Functional",
        description: "A full-body conditioning exercise that improves cardiovascular endurance, strength, and coordination using heavy ropes."
    },
    {
        name: "Sled Push",
        category: "Functional",
        description: "Pushing a weighted sled to improve lower body power, acceleration, and full-body conditioning."
    },
    {
        name: "Tire Flips",
        category: "Functional",
        description: "Flipping a large tire to build explosive power and full-body functional strength."
    },
    {
        name: "Sandbag Clean and Press",
        category: "Functional",
        description: "Mimics real-world lifting by moving an awkward object to build grip, stability, and strength."
    },
    {
        name: "Box Jumps",
        category: "Functional",
        description: "Plyometric movement to improve leg power, explosiveness, and agility."
    },
    {
        name: "Turkish Get-Up",
        category: "Functional",
        description: "A complex movement involving full-body coordination, shoulder stability, and core control."
    },
    {
        name: "Bear Crawl",
        category: "Functional",
        description: "A bodyweight movement used for conditioning and improving core, shoulder, and hip stability."
    }
];

export {
    shoulderExerciseDump,
    chestExerciseDump,
    backExerciseDump,
    legExerciseDump,
    armExerciseDump,
    coreExerciseDump,
    cardioExerciseDump,
    flexibilityExerciseDump,
    warmUpExerciseDump,
    coolDownExerciseDump,
    fullBodyExerciseDump,
    plyometricExerciseDump,
    balanceExerciseDump,
    functionalExerciseDump
};