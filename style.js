// Destination object constructor
function Destination(location, landmarks, timeOfYear, notes) {
    this.id = Date.now();
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

// Destinations manager
function DestinationManager() {
    this.destinations = [];
    this.loadDestinations();
}

// Add a new destination
DestinationManager.prototype.addDestination = function(location, landmarks, timeOfYear, notes) {
    const destination = new Destination(location, landmarks, timeOfYear, notes);
    this.destinations.push(destination);
    this.saveDestinations();
    this.render();
};

// Delete a destination
DestinationManager.prototype.deleteDestination = function(id) {
    this.destinations = this.destinations.filter(d => d.id !== id);
    this.saveDestinations();
    this.render();
};

// Save destinations to localStorage
DestinationManager.prototype.saveDestinations = function() {
    localStorage.setItem('destinations', JSON.stringify(this.destinations));
};

// Load destinations from localStorage
DestinationManager.prototype.loadDestinations = function() {
    const saved = localStorage.getItem('destinations');
    if (saved) {
        this.destinations = JSON.parse(saved);
    }
};

// Render all destinations
DestinationManager.prototype.render = function() {
    const list = document.getElementById('destinationsList');
    list.innerHTML = '';
    
    this.destinations.forEach(destination => {
        const li = document.createElement('li');
        li.dataset.id = destination.id;
        li.className = 'destination-item';
        li.innerHTML = `
            <div class="destination-card">
                <h3>${destination.location}</h3>
                <p><strong>Landmarks:</strong> ${destination.landmarks || 'None'}</p>
                <p><strong>Time of Year:</strong> ${destination.timeOfYear || 'Not specified'}</p>
                <p><strong>Notes:</strong> ${destination.notes || 'No notes'}</p>
                <button class="delete-btn" onclick="manager.deleteDestination(${destination.id})">Delete</button>
            </div>
        `;
        list.appendChild(li);
    });
};

// Initialize the manager
const manager = new DestinationManager();

// Handle form submission
document.getElementById('destinationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value.trim();
    const landmarks = document.getElementById('landmarks').value.trim();
    const timeOfYear = document.getElementById('timeOfYear').value.trim();
    const notes = document.getElementById('notes').value.trim();
    
    if (location) {
        manager.addDestination(location, landmarks, timeOfYear, notes);
        this.reset();
    } else {
        alert('Please enter a location');
    }
});

// Initial render
manager.render();

