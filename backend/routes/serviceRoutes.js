import express from 'express';

const router = express.Router();

const services = [
  {
    id: 1,
    name: 'Engineering Consultancy',
    description:
      'Comprehensive engineering solutions tailored to your specific needs in the oil and gas sector.',
    category: 'Consultancy',
    offerings: [
      'Reservoir Engineering',
      'Production Optimization',
      'Well Design & Planning',
      'Risk Assessment',
      'Field Development Studies',
    ],
    image: 'engineering-consultancy.jpg',
  },
  {
    id: 2,
    name: 'Software Development',
    description:
      'Custom software solutions designed specifically for the energy industry to optimize operations.',
    category: 'Technology',
    offerings: [
      'Workflow Automation',
      'Data Management Systems',
      'Real-time Monitoring',
      'Cloud-based Solutions',
      'Mobile Applications',
    ],
    image: 'software-development.jpg',
  },
  {
    id: 3,
    name: 'Customized Training',
    description:
      'Professional development programs designed to enhance skills of industry professionals.',
    category: 'Training',
    offerings: [
      'Technical Workshops',
      'Software Training',
      'Best Practices',
      'Industry Standards',
      'Certification Programs',
    ],
    image: 'training.jpg',
  },
  {
    id: 4,
    name: 'Technical Support',
    description:
      'Round-the-clock technical assistance for all our products and services.',
    category: 'Support',
    offerings: [
      '24/7 Support',
      'Remote Assistance',
      'On-site Support',
      'System Maintenance',
      'Updates & Upgrades',
    ],
    image: 'technical-support.jpg',
  },
  {
    id: 5,
    name: 'Performance Analysis',
    description:
      'Detailed analytics and reporting to optimize your operations and decision-making.',
    category: 'Analytics',
    offerings: [
      'Data Analytics',
      'Performance Metrics',
      'Custom Reports',
      'Benchmarking',
      'Optimization Strategies',
    ],
    image: 'performance-analysis.jpg',
  },
];

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: error.message,
    });
  }
});

router.get('/:id', (req, res) => {
  try {
    const service = services.find((s) => s.id === parseInt(req.params.id));

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service',
      error: error.message,
    });
  }
});

export default router;
