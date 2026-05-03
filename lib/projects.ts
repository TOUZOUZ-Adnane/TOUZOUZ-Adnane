export type Project = {
  slug: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: 'gym-gard',
    title: 'GymGuard - AI Gym Surveillance System',
    description:
      'Interactive gym surveillance platform with live camera dashboards, AI-style event tracking, and real-time monitoring of equipment and user activity.',
    details:
      'Interactive gym surveillance platform with live camera dashboards, AI-style event tracking, and real-time monitoring of equipment and user activity. It provides actionable insights for gym management and enhances user experience through intelligent monitoring.',
    tags: ['ViT', 'RNN', 'Yolo', 'Sports Analytics', 'PyTorch'],
    image: 'gymgard.png',
    url: "https://touzouz-adnane.github.io/GymGuard/",
  },
  {
    slug: 'sports-analytics',
    title: 'Sports Analytics - Real-Time Action Detection',
    description:
      'AI-driven sports analytics using ViT and MViT for real-time action detection in futsal with predictive player performance models.',
    details:
      'A complete real-time sports analytics pipeline built on ViT and MViT architectures. This project detects player actions, tracks movement patterns, and generates advanced performance metrics for futsal matches.',
    tags: ['ViT', 'MViT', 'RNN', 'Sports Analytics', 'PyTorch'],
    image: 'futsal_tmpl.png',
  },
  {
    slug: 'uav-image-processing',
    title: 'UAV Image Processing Pipeline',
    description:
      'Object detection, classification, and segmentation on high-resolution aerial imagery with optimization for large-scale UAV datasets.',
    details:
      'Aerial image workflows designed for UAV data. The project combines object detection and segmentation models with optimized preprocessing to handle large-scale imagery efficiently.',
    tags: ['Object Detection', 'Segmentation', 'UAV', 'OpenCV', 'Deep Learning'],
    image: 'uav_tmpl.jpg',
  },
  {
    slug: 'temporal-action-segmentation',
    title: 'Temporal Action Segmentation',
    description:
      'Continuous factory activity recognition addressing long-term temporal dependencies in video streams with RNNs and Transformers.',
    details:
      'A temporal modeling solution for factory video streams. It captures long-term dependencies using RNNs and Transformers to segment and recognize continuous actions over time.',
    tags: ['LSTM', 'Transformers', 'Video Analysis', 'Action Recognition'],
    image: 'action_tmpl.png',
  },
  {
    slug: 'crowd-behavior-analysis',
    title: 'Crowd Behavior Analysis',
    description:
      'Motion pattern analysis, density estimation, and abnormal behavior detection in video sequences using deep learning.',
    details:
      'A behavior analysis system that identifies crowd motion patterns and detects abnormal events using video sequence modeling and deep learning.',
    tags: ['Video Analysis', 'Behavior Detection', 'Motion Analysis', 'CNN'],
    image: 'crowd_tmpl.png',
  },
  {
    slug: 'fire-prevention-system',
    title: 'Fire Prevention System',
    description:
      'Thermal camera-based hotspot detection and analysis with models optimized for varying environmental conditions.',
    details:
      'A fire prevention solution using thermal cameras to detect hotspots and risk conditions. It is optimized for environmental variability and fast alerting.',
    tags: ['Thermal Imaging', 'Detection', 'Computer Vision', 'TensorFlow'],
    image: 'fire_tmpl.png',
  },
  {
    slug: 'livestock-weight-estimation',
    title: 'Livestock Weight Estimation',
    description:
      'Visual data processing combining object detection and regression-based approaches for automated livestock analysis.',
    details:
      'A visual analytics system for livestock management. It estimates animal weight using object detection combined with regression and image-based feature extraction.',
    tags: ['Object Detection', 'Regression', 'Agriculture AI', 'PyTorch'],
    image: 'catle_weight_tmpl.jpg',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
