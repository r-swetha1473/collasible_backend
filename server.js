const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

// Middleware
app.use(cors());
app.use(express.json());

// AI Tools Data
const aiToolsData = {
  root: {
    id: 'root',
    name: 'AI Tools',
    description: 'Comprehensive collection of AI tools and platforms',
    icon: '🤖',
    children: [
      {
        id: 'generative-ai',
        name: 'Generative AI',
        description: 'Tools for generating text, images, video, and other content using artificial intelligence',
        icon: '✨',
        children: [
          {
            id: 'text-generation',
            name: 'Text Generation',
            description: 'AI-powered text and content generation tools',
            icon: '📝',
            tools: [
              {
                id: 'chatgpt',
                name: 'ChatGPT',
                description: 'Advanced conversational AI for writing, analysis, coding, and creative tasks',
                url: 'https://chat.openai.com',
                category: 'Text Generation',
                tags: ['conversation', 'writing', 'analysis', 'coding'],
                isPopular: true
              },
              {
                id: 'claude',
                name: 'Claude',
                description: 'Anthropic\'s AI assistant for safe, helpful conversations and analysis',
                url: 'https://claude.ai',
                category: 'Text Generation',
                tags: ['conversation', 'analysis', 'safety'],
                isPopular: true
              },
              {
                id: 'jasper',
                name: 'Jasper',
                description: 'AI content platform for marketing teams and businesses',
                url: 'https://jasper.ai',
                category: 'Text Generation',
                tags: ['marketing', 'content', 'business'],
                isPremium: true
              },
              {
                id: 'copy-ai',
                name: 'Copy.ai',
                description: 'AI-powered copywriting tool for marketing and sales content',
                url: 'https://copy.ai',
                category: 'Text Generation',
                tags: ['copywriting', 'marketing', 'sales']
              }
            ]
          },
          {
            id: 'image-generation',
            name: 'Image Generation',
            description: 'AI tools for creating and editing images',
            icon: '🎨',
            tools: [
              {
                id: 'midjourney',
                name: 'Midjourney',
                description: 'AI art generator creating stunning visuals from text prompts',
                url: 'https://midjourney.com',
                category: 'Image Generation',
                tags: ['art', 'creativity', 'design'],
                isPopular: true,
                isPremium: true
              },
              {
                id: 'dalle2',
                name: 'DALL-E 2',
                description: 'OpenAI\'s AI system for creating realistic images from text',
                url: 'https://openai.com/dall-e-2',
                category: 'Image Generation',
                tags: ['realistic', 'creative', 'editing'],
                isPopular: true
              },
              {
                id: 'stable-diffusion',
                name: 'Stable Diffusion',
                description: 'Open-source AI image generation model',
                url: 'https://stability.ai',
                category: 'Image Generation',
                tags: ['open-source', 'customizable', 'free']
              },
              {
                id: 'leonardo-ai',
                name: 'Leonardo AI',
                description: 'AI art generator focused on game assets and creative content',
                url: 'https://leonardo.ai',
                category: 'Image Generation',
                tags: ['gaming', 'assets', 'creative']
              }
            ]
          },
          {
            id: 'video-generation',
            name: 'Video Generation',
            description: 'AI tools for creating and editing videos',
            icon: '🎬',
            tools: [
              {
                id: 'runway',
                name: 'Runway',
                description: 'AI-powered creative suite for video generation and editing',
                url: 'https://runwayml.com',
                category: 'Video Generation',
                tags: ['video', 'editing', 'creative'],
                isPopular: true,
                isPremium: true
              },
              {
                id: 'synthesia',
                name: 'Synthesia',
                description: 'AI video generation platform with synthetic actors',
                url: 'https://synthesia.io',
                category: 'Video Generation',
                tags: ['synthetic', 'actors', 'business'],
                isPremium: true
              }
            ]
          }
        ]
      },
      {
        id: 'computer-vision',
        name: 'Computer Vision',
        description: 'AI tools for image and video analysis, object detection, and visual recognition',
        icon: '👁️',
        children: [
          {
            id: 'object-detection',
            name: 'Object Detection',
            description: 'Tools for detecting and recognizing objects in images',
            icon: '🎯',
            tools: [
              {
                id: 'roboflow',
                name: 'Roboflow',
                description: 'Computer vision platform for building and deploying AI models',
                url: 'https://roboflow.com',
                category: 'Object Detection',
                tags: ['object-detection', 'training', 'deployment'],
                isPopular: true
              },
              {
                id: 'yolo',
                name: 'YOLO',
                description: 'Real-time object detection system',
                url: 'https://pjreddie.com/darknet/yolo/',
                category: 'Object Detection',
                tags: ['real-time', 'detection', 'open-source']
              }
            ]
          },
          {
            id: 'image-analysis',
            name: 'Image Analysis',
            description: 'Advanced image processing and analysis tools',
            icon: '🔍',
            tools: [
              {
                id: 'google-vision',
                name: 'Google Cloud Vision',
                description: 'Powerful image analysis with machine learning',
                url: 'https://cloud.google.com/vision',
                category: 'Image Analysis',
                tags: ['google', 'cloud', 'enterprise'],
                isPremium: true
              },
              {
                id: 'clarifai',
                name: 'Clarifai',
                description: 'AI platform for computer vision and image recognition',
                url: 'https://clarifai.com',
                category: 'Image Analysis',
                tags: ['recognition', 'platform', 'api']
              }
            ]
          }
        ]
      },
      {
        id: 'nlp',
        name: 'Natural Language Processing',
        description: 'AI tools for text analysis, translation, and language understanding',
        icon: '🗣️',
        children: [
          {
            id: 'translation',
            name: 'Translation',
            description: 'AI-powered language translation tools',
            icon: '🌐',
            tools: [
              {
                id: 'deepl',
                name: 'DeepL',
                description: 'AI-powered translator for high-quality translations',
                url: 'https://deepl.com',
                category: 'Translation',
                tags: ['translation', 'accuracy', 'languages'],
                isPopular: true
              },
              {
                id: 'google-translate',
                name: 'Google Translate',
                description: 'Free multilingual machine translation service',
                url: 'https://translate.google.com',
                category: 'Translation',
                tags: ['free', 'multilingual', 'instant']
              }
            ]
          },
          {
            id: 'sentiment-analysis',
            name: 'Sentiment Analysis',
            description: 'Tools for analyzing emotions and opinions in text',
            icon: '😊',
            tools: [
              {
                id: 'monkeylearn',
                name: 'MonkeyLearn',
                description: 'Text analysis platform with sentiment analysis',
                url: 'https://monkeylearn.com',
                category: 'Sentiment Analysis',
                tags: ['sentiment', 'analysis', 'platform']
              }
            ]
          }
        ]
      },
      {
        id: 'development',
        name: 'Development & Code',
        description: 'AI tools for software development, code generation, and programming assistance',
        icon: '💻',
        children: [
          {
            id: 'code-assistance',
            name: 'Code Assistance',
            description: 'AI-powered coding companions and assistants',
            icon: '🤝',
            tools: [
              {
                id: 'github-copilot',
                name: 'GitHub Copilot',
                description: 'AI pair programmer that helps you write code faster',
                url: 'https://github.com/features/copilot',
                category: 'Code Assistance',
                tags: ['coding', 'programming', 'productivity'],
                isPopular: true,
                isPremium: true
              },
              {
                id: 'tabnine',
                name: 'Tabnine',
                description: 'AI code completion tool for developers',
                url: 'https://tabnine.com',
                category: 'Code Assistance',
                tags: ['completion', 'productivity', 'ide']
              },
              {
                id: 'codeium',
                name: 'Codeium',
                description: 'Free AI-powered code acceleration toolkit',
                url: 'https://codeium.com',
                category: 'Code Assistance',
                tags: ['free', 'acceleration', 'toolkit']
              }
            ]
          },
          {
            id: 'code-review',
            name: 'Code Review',
            description: 'AI tools for automated code review and quality assurance',
            icon: '🔍',
            tools: [
              {
                id: 'codeclimate',
                name: 'Code Climate',
                description: 'Automated code review and quality analytics',
                url: 'https://codeclimate.com',
                category: 'Code Review',
                tags: ['review', 'quality', 'analytics']
              }
            ]
          }
        ]
      },
      {
        id: 'productivity',
        name: 'Productivity & Automation',
        description: 'AI tools for enhancing productivity and automating workflows',
        icon: '⚡',
        children: [
          {
            id: 'workflow-automation',
            name: 'Workflow Automation',
            description: 'Tools for automating business processes and workflows',
            icon: '🔄',
            tools: [
              {
                id: 'zapier',
                name: 'Zapier',
                description: 'Automation platform connecting apps and services',
                url: 'https://zapier.com',
                category: 'Workflow Automation',
                tags: ['automation', 'integration', 'productivity'],
                isPopular: true
              },
              {
                id: 'notion-ai',
                name: 'Notion AI',
                description: 'AI-powered workspace for notes, docs, and collaboration',
                url: 'https://notion.so',
                category: 'Productivity',
                tags: ['workspace', 'collaboration', 'notes'],
                isPopular: true
              }
            ]
          }
        ]
      }
    ]
  }
};

// Flatten all tools for search functionality
function getAllTools() {
  const tools = [];
  
  function extractTools(category) {
    if (category.tools) {
      tools.push(...category.tools);
    }
    if (category.children) {
      category.children.forEach(extractTools);
    }
  }
  
  extractTools(aiToolsData.root);
  return tools;
}

// API Routes
app.get('/api/categories', (req, res) => {
  res.json(aiToolsData.root);
});

app.get('/api/tools', (req, res) => {
  const allTools = getAllTools();
  res.json(allTools);
});

app.get('/api/tools/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const allTools = getAllTools();
  
  if (!query.trim()) {
    return res.json(allTools);
  }
  
  const filteredTools = allTools.filter(tool => 
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.category.toLowerCase().includes(query) ||
    tool.tags.some(tag => tag.toLowerCase().includes(query))
  );
  
  res.json(filteredTools);
});

app.get('/api/tools/featured', (req, res) => {
  const allTools = getAllTools();
  const featuredTools = allTools.filter(tool => tool.isPopular || tool.isPremium);
  res.json(featuredTools.slice(0, 6)); // Return top 6 featured tools
});

app.get('/api/categories/:categoryId/tools', (req, res) => {
  const categoryId = req.params.categoryId;
  
  function findCategoryTools(category) {
    if (category.id === categoryId && category.tools) {
      return category.tools;
    }
    if (category.children) {
      for (const child of category.children) {
        const result = findCategoryTools(child);
        if (result) return result;
      }
    }
    return null;
  }
  
  const tools = findCategoryTools(aiToolsData.root);
  if (tools) {
    res.json(tools);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not csfound' });
});


app.listen(PORT, () => {
  console.log(`🚀 AI Tools Explorer API running on port ${PORT}`);
  console.log(`📊 Serving ${getAllTools().length} AI tools across multiple categories`);
});
