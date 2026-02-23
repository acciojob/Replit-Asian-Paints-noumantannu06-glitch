//your JS code here. If required.
// Get all required elements
        const gridContainer = document.getElementById('grid-container');
        const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('Reset');
        const blockIdInput = document.getElementById('block_id');
        const colorIdInput = document.getElementById('colour_id');

        // Change color functionality
        changeButton.addEventListener('click', function() {
            const blockId = blockIdInput.value;
            const color = colorIdInput.value;
            
            // Validate block ID
            if (!blockId || blockId < 1 || blockId > 9 || isNaN(blockId)) {
                alert('Please enter a valid block ID (1-9)');
                return;
            }
            
            // First reset all grids to transparent
            const allGridItems = document.querySelectorAll('.grid-item');
            allGridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
            
            // Change specific grid item color
            const targetGrid = document.getElementById(blockId);
            if (targetGrid) {
                targetGrid.style.backgroundColor = color;
            }
        });

        // Reset functionality
        resetButton.addEventListener('click', function() {
            const allGridItems = document.querySelectorAll('.grid-item');
            allGridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
            
            // Clear inputs
            blockIdInput.value = '';
            colorIdInput.value = '#ff0000';
        });
