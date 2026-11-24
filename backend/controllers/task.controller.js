
// import { taskCatalog } from '../config/task-catalog.js';

// export const getTaskCatalog = (req, res) => {
//   try {
//     const { category } = req.query;

//     if (!category) {
//       return res.status(200).json({
//         success: true,
//         data: taskCatalog
//       });
//     }

//     const selectedCategory = taskCatalog.find(
//       item => item.id === category
//     );

//     if (!selectedCategory) {
//       return res.status(404).json({
//         success: false,
//         message: 'Task category not found'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: selectedCategory
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: 'Unable to fetch task catalog'
//     });
//   }
// };



import { taskCatalog } from '../config/task-catalog.js';

export const getTaskCatalog = (req, res) => {
  const { category } = req.query;

  // Return all categories
  if (!category) {
    return res.status(200).json({
      success: true,
      data: taskCatalog
    });
  }

  // Find selected category
  const selectedCategory = taskCatalog.find(
    item => item.id === category
  );

  if (!selectedCategory) {
    return res.status(404).json({
      success: false,
      message: 'Category not found'
    });
  }

  return res.status(200).json({
    success: true,
    data: selectedCategory
  });
};


