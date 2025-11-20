import express from 'express';

const router = express.Router();

const products = [
  {
    id: 1,
    name: 'SandMaster',
    tagline: 'Advanced Sand Management',
    description:
      'Comprehensive software solution for sand management in oil and gas operations.',
    category: 'Production',
    features: [
      'Real-time sand production monitoring',
      'Predictive analytics',
      'Automated reporting',
      'Risk assessment tools',
    ],
  },
  {
    id: 2,
    name: 'AutoWellz',
    tagline: 'Well Operation Workflow',
    description:
      'Streamline your well operations with automated workflow management.',
    category: 'Operations',
    features: [
      'Workflow automation',
      'Real-time collaboration',
      'Document management',
      'Compliance tracking',
    ],
  },
  {
    id: 3,
    name: 'AutoPro',
    tagline: 'Engineering Process Digitization',
    description:
      'Transform your engineering processes with digital solutions.',
    category: 'Engineering',
    features: [
      'Process automation',
      'Digital workflows',
      'Data integration',
      'Performance optimization',
    ],
  },
  {
    id: 4,
    name: 'RockMaster',
    tagline: 'Rock Mechanical Stability',
    description:
      'Advanced rock mechanics analysis tool for evaluating wellbore stability.',
    category: 'Geomechanics',
    features: [
      'Wellbore stability analysis',
      'Geomechanical modeling',
      'Risk prediction',
      'Formation evaluation',
    ],
  },
  {
    id: 5,
    name: 'GREEN',
    tagline: 'GHG Emissions Calculator',
    description:
      'Calculate, track, and reduce your carbon footprint with our comprehensive greenhouse gas emissions calculator.',
    category: 'Sustainability',
    features: [
      'Emissions calculation',
      'Carbon footprint tracking',
      'Sustainability reporting',
      'Reduction strategies',
    ],
  },
];

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message,
    });
  }
});

router.get('/:id', (req, res) => {
  try {
    const product = products.find((p) => p.id === parseInt(req.params.id));

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error: error.message,
    });
  }
});

export default router;
