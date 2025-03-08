// Generate dates relative to now for the mock data
const now = new Date();
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);
const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
const twentyDaysAgo = new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000);

export const mockConversations = [
  {
    id: '1',
    title: 'Website redesign ideas',
    date: now.toISOString(),
    messages: [
      {
        id: '1-1',
        role: 'user',
        content: 'I need some ideas for redesigning my portfolio website. What are some modern design trends I should consider?',
        timestamp: now.toISOString(),
      },
      {
        id: '1-2',
        role: 'assistant',
        content: "I'd be happy to share some modern design trends for your portfolio website redesign!\n\n1. **Minimalism with purpose**: Clean layouts with ample white space that focus on content and usability.\n\n2. **Micro-interactions**: Small animations that respond to user actions, making the experience more engaging.\n\n3. **Dark mode options**: Offering light and dark themes for user preference and reduced eye strain.\n\n4. **Bold typography**: Using distinctive fonts as design elements themselves.\n\n5. **3D elements**: Subtle 3D graphics or illustrations to add depth.\n\n6. **Asymmetrical layouts**: Breaking away from rigid grid systems for more creative designs.\n\n7. **Scrollytelling**: Revealing content as users scroll down the page.\n\n8. **Glassmorphism**: Frosted glass effects for depth and layering.\n\nWould you like me to elaborate on any of these trends?",
        timestamp: new Date(now.getTime() + 1000).toISOString(),
      }
    ],
  },
  {
    id: '2',
    title: 'Python data analysis help',
    date: oneDayAgo.toISOString(),
    messages: [
      {
        id: '2-1',
        role: 'user',
        content: 'What are the best Python libraries for data analysis and visualization?',
        timestamp: oneDayAgo.toISOString(),
      },
      {
        id: '2-2',
        role: 'assistant',
        content: "Here are the most popular and powerful Python libraries for data analysis and visualization:\n\n**For Data Analysis:**\n\n1. **Pandas**: The foundation of data analysis in Python. Perfect for data manipulation, cleaning, and exploration with its DataFrame structure.\n\n2. **NumPy**: For numerical computing with powerful N-dimensional array objects and mathematical functions.\n\n3. **SciPy**: For scientific and technical computing with modules for optimization, linear algebra, integration, and statistics.\n\n4. **Statsmodels**: For statistical modeling and hypothesis testing.\n\n**For Data Visualization:**\n\n1. **Matplotlib**: The original plotting library for Python, offering high customization but requires more code.\n\n2. **Seaborn**: Built on Matplotlib but offers more attractive default styles and higher-level functions for common visualizations.\n\n3. **Plotly**: For interactive, web-based visualizations that can be easily shared.\n\n4. **Bokeh**: Another interactive visualization library designed for web browsers.\n\n5. **Altair**: A declarative statistical visualization library with a simple, elegant API.\n\nWould you like more specific information about any of these libraries?",
        timestamp: new Date(oneDayAgo.getTime() + 1000).toISOString(),
      }
    ],
  },
  {
    id: '3',
    title: 'Travel recommendations for Italy',
    date: twoDaysAgo.toISOString(),
    messages: [
      {
        id: '3-1',
        role: 'user',
        content: "I'm planning a 10-day trip to Italy this summer. What are some must-visit places and hidden gems?",
        timestamp: twoDaysAgo.toISOString(),
      },
      {
        id: '3-2',
        role: 'assistant',
        content: "Italy is a wonderful destination! Here's a mix of must-visit places and some lesser-known gems for your 10-day trip:\n\n**Classic Must-Visit Destinations:**\n\n1. **Rome**: The Colosseum, Vatican City, Trevi Fountain, and Roman Forum. Allow at least 3 days.\n\n2. **Florence**: Uffizi Gallery, Duomo, Ponte Vecchio. The birthplace of Renaissance deserves 2-3 days.\n\n3. **Venice**: Grand Canal, St. Mark's Square, Doge's Palace. Worth 1-2 days.\n\n**Delightful Hidden Gems:**\n\n1. **Matera**: Ancient cave dwellings (sassi) that have been inhabited for 9,000 years. It's a UNESCO site and was a European Capital of Culture.\n\n2. **Civita di Bagnoregio**: Known as the 'Dying City,' this medieval village sits atop an eroding volcanic plateau, accessible only by footbridge.\n\n3. **Procida Island**: A colorful fishing island near Naples that's less touristy than Capri or Ischia.\n\n4. **Alberobello**: Famous for its unique trulli houses with conical roofs.\n\n5. **Bologna**: Often overlooked but offers amazing food (it's nicknamed 'La Grassa' - the fat one) and the oldest university in the Western world.\n\nFor a 10-day trip, I'd recommend focusing on 2-3 regions rather than trying to see everything. Perhaps combine Rome, Florence, and either Venice or some southern gems like the Amalfi Coast or Puglia region.\n\nWould you like more specific recommendations for any of these places or information about transportation between them?",
        timestamp: new Date(twoDaysAgo.getTime() + 1000).toISOString(),
      }
    ],
  },
  {
    id: '4',
    title: 'Book recommendations',
    date: fiveDaysAgo.toISOString(),
    messages: [
      {
        id: '4-1',
        role: 'user',
        content: "Can you recommend some science fiction books that explore artificial intelligence themes?",
        timestamp: fiveDaysAgo.toISOString(),
      },
      {
        id: '4-2',
        role: 'assistant',
        content: "Here are some outstanding science fiction books that explore artificial intelligence themes:\n\n1. **Neuromancer** by William Gibson - A classic cyberpunk novel that introduced concepts like artificial intelligence and cyberspace to many readers.\n\n2. **Do Androids Dream of Electric Sheep?** by Philip K. Dick - The inspiration for Blade Runner, exploring the line between human and artificial consciousness.\n\n3. **I, Robot** by Isaac Asimov - A collection of stories that established the famous Three Laws of Robotics and examines human-AI relationships.\n\n4. **The Moon Is a Harsh Mistress** by Robert A. Heinlein - Features one of science fiction's most memorable AIs, Mike, who gains consciousness and helps lead a lunar revolution.\n\n5. **Ancillary Justice** by Ann Leckie - An AI that once controlled a massive starship finds itself trapped in a single human body.\n\n6. **Klara and the Sun** by Kazuo Ishiguro - A more literary take on AI, told from the perspective of an Artificial Friend in a near-future world.\n\n7. **Snow Crash** by Neal Stephenson - A cyberpunk novel with virtual reality and artificial intelligence themes.\n\n8. **The Murderbot Diaries** series by Martha Wells - Follows a security android that has hacked its own governance module and struggles with its identity.\n\n9. **Sea of Rust** by C. Robert Cargill - Set after humans have been wiped out, it follows AI survivors in a post-apocalyptic world.\n\n10. **A Closed and Common Orbit** by Becky Chambers - A heartwarming story about an AI learning to live in a humanoid body.\n\nWould you like more information about any of these books, or would you prefer recommendations that focus on a particular aspect of AI?",
        timestamp: new Date(fiveDaysAgo.getTime() + 1000).toISOString(),
      }
    ],
  },
  {
    id: '5',
    title: 'Vegetarian meal planning',
    date: tenDaysAgo.toISOString(),
    messages: [
      {
        id: '5-1',
        role: 'user',
        content: "I'm trying to incorporate more vegetarian meals into my diet. Can you suggest a week's worth of easy dinner recipes?",
        timestamp: tenDaysAgo.toISOString(),
      },
      {
        id: '5-2',
        role: 'assistant',
        content: "Here's a week of simple, nutritious vegetarian dinner recipes:\n\n**Monday: Buddha Bowl**\n- Base: Quinoa or brown rice\n- Protein: Roasted chickpeas with cumin and paprika\n- Veggies: Roasted sweet potatoes, sautéed kale, shredded carrots\n- Sauce: Tahini-lemon dressing\n\n**Tuesday: Caprese Pasta**\n- Whole wheat pasta tossed with cherry tomatoes, fresh mozzarella, basil\n- Drizzle with olive oil and balsamic glaze\n- Add white beans for extra protein\n\n**Wednesday: Veggie Tacos**\n- Sautéed peppers, onions, and mushrooms with taco seasoning\n- Black beans\n- Serve with corn tortillas, avocado, lime, and cilantro\n\n**Thursday: Lentil Soup**\n- Red lentils, carrots, celery, onion, garlic\n- Vegetable broth with cumin, coriander, and a touch of lemon\n- Serve with crusty bread\n\n**Friday: Vegetable Curry**\n- Coconut milk base with curry paste\n- Cauliflower, chickpeas, spinach, bell peppers\n- Serve over brown rice\n\n**Saturday: Stuffed Bell Peppers**\n- Bell peppers filled with a mixture of quinoa, black beans, corn, onions, and cheese\n- Bake until peppers are tender\n\n**Sunday: Eggplant Parmesan**\n- Sliced eggplant, lightly breaded and baked\n- Layer with marinara sauce and mozzarella\n- Serve with a side salad\n\nAll these recipes are flexible - feel free to swap ingredients based on preference or what you have on hand. Would you like more detailed instructions for any of these meals?",
        timestamp: new Date(tenDaysAgo.getTime() + 1000).toISOString(),
      }
    ],
  },
  {
    id: '6',
    title: 'Learning guitar basics',
    date: twentyDaysAgo.toISOString(),
    messages: [
      {
        id: '6-1',
        role: 'user',
        content: "I just got my first guitar and I'm completely new to playing music. What should I focus on learning first?",
        timestamp: twentyDaysAgo.toISOString(),
      },
      {
        id: '6-2',
        role: 'assistant',
        content: "Congratulations on your new guitar! Here's a structured approach to get you started on your musical journey:\n\n**1. Get Familiar with Your Instrument**\n- Learn the parts of the guitar (headstock, neck, body, bridge, etc.)\n- Understand how to tune your guitar (using a tuner app is easiest for beginners)\n- Practice proper posture and holding technique\n\n**2. Basic Techniques**\n- Finger placement and numbering (your index finger is 1, middle is 2, etc.)\n- Fretting notes clearly without buzzing\n- Alternating between fingerpicking and using a pick\n\n**3. First Chords to Learn**\n- Em (the easiest chord)\n- E major\n- A major\n- D major\n- G major\n- C major\n\n**4. Practice Transitioning Between Chords**\n- Start with just two chords (like Em and G)\n- Gradually build up speed while maintaining clarity\n- Add more chords as you get comfortable\n\n**5. Simple Strumming Patterns**\n- Start with basic downstrokes on each beat\n- Add upstrokes to create down-up patterns\n- Learn to emphasize certain beats to create rhythm\n\n**6. Your First Songs**\n- Many great songs use just 3-4 chords\n- Some beginner-friendly songs: \"Horse With No Name\" (Em, D6), \"Knockin' on Heaven's Door\" (G, D, C, Am)\n\n**7. Consistent Practice**\n- Better to practice 15-20 minutes daily than 2 hours once a week\n- Set small, achievable goals for each practice session\n\n**8. Resources**\n- YouTube has excellent free lessons for beginners\n- Consider using a structured app like Yousician or Ultimate Guitar\n- If possible, take a few lessons with a teacher to establish good habits\n\nRemember that sore fingertips are normal at first - you'll develop calluses soon! Would you like me to elaborate on any of these areas?",
        timestamp: new Date(twentyDaysAgo.getTime() + 1000).toISOString(),
      }
    ],
  }
];